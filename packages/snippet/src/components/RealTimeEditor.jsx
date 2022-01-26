import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";

import "brace/theme/dracula";
import "brace/mode/typescript";

import { SocketService } from "./SocketService";
import { Text, Code } from "@chakra-ui/react";

const username = `User ${Math.round(Math.random() * 10)}`;

const RealTimeEditor = () => {
  const socket = new SocketService().init();
  const [data, setData] = useState('');

  useEffect(() => {
    socket.onCodeListener(setData);

    return () => {
      socket.emit("DISSCONNECT_FROM_ROOM", { username });
    };
  }, []);

  const onChange = (value) => {
    console.log(value)
    socket.onCodeChange({ code: value, username: username });
  };

  return (
    <>
      <Text fontSize="2xl">Your username is: {username}</Text>
      <AceEditor 
        mode="typescript"
        theme="dracula"
        fontSize={14}
        width="760px"
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={data}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2
        }}
        editorProps={{ $blockScrolling: true }}
        onChange={newPipe => onChange(newPipe)}
      />
    </>
  );
};

export default RealTimeEditor;
