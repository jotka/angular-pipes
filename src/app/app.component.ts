import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    name = 'bec';

    name2 = 'nykredit';

    array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    PI = Math.PI;

    value:number = 0.234;

    salary = 1250.50;

    heroes = {
        name: 'Logan',
        name2: "Wolverine",
        value: 500,
        something: {
            nested: "Primera",
            nested2: 19
        }
    };

    promiseValue = new Promise((resolve, reject) => {
        setTimeout(() => resolve("I'm here after 3.5 secs!"), 3500);
    });

    myDate = new Date();

    myPassword = "h0l@Mun50";

    active = true;
}
