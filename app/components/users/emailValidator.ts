import {Control} from 'angular2/common';

export class EmailValidators {

     static shouldHaveCorrectFormat(control: Control) {
         if(control.value === '')
            return null;
         
         var re = /\S+@\S+\.\S+/;

        if(!re.test(control.value))
            return { shouldHaveCorrectFormat: true };
        
        return null;
    }
}