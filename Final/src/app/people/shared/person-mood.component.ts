import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'pv-person-mood',
    templateUrl: 'person-mood.component.html'
})
export class PersonMoodComponent implements OnInit, OnChanges {
    @Input() moodLevel: number;
    @Output() 
    getUrl: EventEmitter<string> =  new EventEmitter<string>()
    imageUrl: string;

    ngOnInit(): void {
        this.setImageUrl();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.setImageUrl();
    }

    setImageUrl(): void{
        switch(this.moodLevel){
            case -1:
                this.imageUrl = 'assets/images/pv-person-mood/triste.jpg';
                break;
            case 0:
                this.imageUrl = 'assets/images/pv-person-mood/neutral.jpg';
                break;
            case 1:
                this.imageUrl = 'assets/images/pv-person-mood/feliz.jpg';
                break;
            default:
                this.imageUrl = 'assets/images/pv-person-mood/question.jpg';
                break;
        }
    }

    onImageClick() : void{
        this.getUrl.emit(this.imageUrl);
    }

}