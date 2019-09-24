import { Component, OnInit } from '@angular/core';
import { TimeService } from './services/time-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SkillTesting';
  time: any;
  textIn: string;

  constructor(private timeService: TimeService) {}

  ngOnInit() {
    this.getTime();
  }

  getTime(): void {
    this.timeService.getTime().subscribe((time: any) => { this.time = time; });
  }

  reversedText(): string { return this.textIn.split('').reverse().join(''); }

  palindrome(): boolean {
    const r = this.reversedText().toLocaleLowerCase().split(' ').join('');
    const formatedText = this.textIn.toLowerCase().split(' ').join('');

    return r === formatedText;
  }
}
