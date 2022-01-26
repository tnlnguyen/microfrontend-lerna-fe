import io from 'socket.io-client';
import { fromEvent, Observable } from 'rxjs';
import { CodeSnippet } from './types';

export class SocketService {
  private socket: SocketIOClient.Socket = {} as SocketIOClient.Socket;

  public init (): SocketService {
    console.log('initiating socket service');
    this.socket = io('localhost:8080');
    return this;
  }

  public onCodeChange (code: CodeSnippet): void {
    console.log('emitting code: ',code);
    this.socket.emit('CODE_CHANGED', code);
  }

  public onCodeListener (editor): void {
    this.socket.on('CODE_CHANGED', (code: CodeSnippet) => {
      console.log('listening code: ',code);
      editor(code.code)
    })
  }
}
