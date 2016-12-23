import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'voter',
    templateUrl: 'app/voter.template.html',
    styleUrls: ['app/voter.style.css']
})
export class VoterComponent { 
    @Input() voteCount = 0;
    @Input() myVote = 0;
    @Output() vote = new EventEmitter();
    
   upVote() {
       if(this.myVote == 1)
            return;

       this.myVote++;
       this.vote.emit({myVote: this.myVote});
   }

   downVote() {
       if(this.myVote == -1)
            return;

       this.myVote--;
       this.vote.emit({myVote: this.myVote});
   }
}