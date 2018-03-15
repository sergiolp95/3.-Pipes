import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {
  transform(value: string, activar: boolean = true): any {
    if(activar){
      let cadena:string = '';
      for(let i=0; i<value.length; i++){
        cadena+='*';
      }
      return cadena;
    }else{
      return value;
    }
  }
}
