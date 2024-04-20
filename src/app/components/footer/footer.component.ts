import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [DatePipe],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})

export class FooterComponent implements OnInit {
    todayDate!: Date;
    authorName!: string;
    authorUrl!: string;

    constructor() {
    }

    ngOnInit(): void {
        this.todayDate = new Date();
        this.authorName = "joanpuigra";
        this.authorUrl = "https://joanpuigra.com/";
    }
}
