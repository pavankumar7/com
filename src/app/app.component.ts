import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyApp';
  serverName='MyServer';
  serverId=10;
  serverStatus=true;

  getServerStatus(){
    return this.serverStatus;
  }


}
