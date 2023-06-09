import { Component } from "@angular/core";
@Component({
    selector:'app-navbar',//selector is similar to css selector; it is used to identify the selector
    // template:`<h1>Navbar Component</h1>
    //           <p>Dummy</p>`,
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']
    // styles:[`h1{
    //     color:red;
    //     font-size:50px;
    // }`]//css we cant write multiple lines hence if we  want to write then use ``
})
export class NavbarComponent{

}
 