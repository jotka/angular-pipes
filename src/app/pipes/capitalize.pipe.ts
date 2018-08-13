import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})

export class CapitalizePipe implements PipeTransform {

    transform(value:string, all:boolean = true):string {
        let result = '';
        let numbers = value.toLowerCase().split(" ");

        if (all) {
            for (let num of numbers) {
                num = num[0].toUpperCase() + num.substr(1);
                result = result + num + ' '
            }
        } else {
            result = value[0].toUpperCase() + value.toLowerCase().substr(1)
        }

        return result;
    }

}