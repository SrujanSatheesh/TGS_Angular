import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './questions-home.component.html',
  styleUrls: ['./questions-home.component.css']
})
export class QuestionsHomeComponent implements OnInit {

  radioSelected:string;
  radioSelectedString:string;
  radioSel:any = '';


  questionsList


  constructor(private testService : TestService, private route: Router) { }

  ngOnInit(): void {

    this.testService.getJSON().subscribe(data => {
      console.log("questions = ", data);
      this.questionsList = data;
    
    })
  }


  getSelecteditem(queindex, optionindex){
    console.log("selected index is = ", queindex, "-", optionindex);

    this.radioSelected = this.questionsList[queindex].options[optionindex].optid;
    console.log("radioSelected = ", this.radioSelected);
   
    //todo - check undefined for radiosel
    this.radioSel = this.questionsList[queindex].options.find(Item => {
  
      return Item.optid === this.radioSelected
    });

    console.log("radioSel = ", this.radioSel);
    this.radioSelectedString = JSON.stringify(this.radioSel);
    
    console.log("radioSelectedString = ", this.radioSelectedString);
  }

  onItemChange(opItem, queindex, optionindex){
    console.log("onItemChange called with opItem = ", opItem);
    this.getSelecteditem(queindex, optionindex);
  }

  submitTest(data){
  
    console.log('Data entered in online test form : ', data);
  

    let correctCount = 0;
    let submittedAnswers = [];


    let totalQueCount = this.questionsList.length;
    for (let queIdx=0; queIdx < totalQueCount; queIdx++){
      let ansId = ""+(queIdx+1) + "a";
      console.log('Data entered in online test form : ', data[ansId] ) ;//data[])

      if(data[ansId] == this.questionsList[queIdx].answerKey){
        correctCount += 1;
      }
      console.log('correctCount= : ', correctCount);
      submittedAnswers.push(data[ansId])
    }

     this.route.navigate(['/results'], { queryParams: {correctCount, totalQueCount, submittedAnswers}})

   
  }

    userRadioSelected : ""

}
