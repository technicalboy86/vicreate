import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    constructor(private spinner: NgxSpinnerService) {

    }

    ngOnInit() {
      this.spinner.show();

      var self = this;

      setTimeout(() => {
        /** spinner ends after 5 seconds */
        self.spinner.hide();
        self.loadScript();
      }, 3000);

    }

    minusCameraDistance(){
      console.log("minusCameraDistance()");
    }

    plusCameraDistance(){
      console.log("plusCameraDistance()");
    }

    loadScript() {
      var isFound = false;
      var scripts = document.getElementsByTagName("script");

      for (var i = 0; i < scripts.length; ++i) {
          if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
              isFound = true;
          }
      }

      if (!isFound) {
        console.log(isFound);
          var dynamicScripts = ["assets/blueprint3d/js/three.min.js"];

          for (var i = 0; i < dynamicScripts.length; i++) {
              let node = document.createElement('script');
              node.src = dynamicScripts [i];
              node.type = 'text/javascript';
              node.async = false;
              node.charset = 'utf-8';
              document.getElementsByTagName('head')[0].appendChild(node);
          }

          dynamicScripts = ["assets/blueprint3d/js/blueprint3d.js"];

          for (var i = 0; i < dynamicScripts.length; i++) {
              let node = document.createElement('script');
              node.src = dynamicScripts [i];
              node.type = 'text/javascript';
              node.async = false;
              node.charset = 'utf-8';
              document.getElementsByTagName('head')[0].appendChild(node);
          }

          dynamicScripts = ["assets/blueprint3d/js/jquery.js"];

          for (var i = 0; i < dynamicScripts.length; i++) {
              let node = document.createElement('script');
              node.src = dynamicScripts [i];
              node.type = 'text/javascript';
              node.async = false;
              node.charset = 'utf-8';
              document.getElementsByTagName('head')[0].appendChild(node);
          }

          dynamicScripts = ["assets/blueprint3d/js/bootstrap.js"];

          for (var i = 0; i < dynamicScripts.length; i++) {
              let node = document.createElement('script');
              node.src = dynamicScripts [i];
              node.type = 'text/javascript';
              node.async = false;
              node.charset = 'utf-8';
              document.getElementsByTagName('head')[0].appendChild(node);
          }

          dynamicScripts = ["assets/blueprint3d/js/items.js"];

          for (var i = 0; i < dynamicScripts.length; i++) {
              let node = document.createElement('script');
              node.src = dynamicScripts [i];
              node.type = 'text/javascript';
              node.async = false;
              node.charset = 'utf-8';
              document.getElementsByTagName('head')[0].appendChild(node);
          }

          dynamicScripts = ["assets/blueprint3d/js/example.js"];

          for (var i = 0; i < dynamicScripts.length; i++) {
              let node = document.createElement('script');
              node.src = dynamicScripts [i];
              node.type = 'text/javascript';
              node.async = false;
              node.charset = 'utf-8';
              document.getElementsByTagName('head')[0].appendChild(node);
          }
       }
    }
}
