import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-review-answers',
  templateUrl: './review-answers.component.html',
  styleUrls: ['./review-answers.component.css']
})
export class ReviewAnswersComponent implements OnInit {

  questionsList
  submittedAnswers;
  constructor(private testService : TestService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.testService.getJSON().subscribe(data => {
      console.log("questions = ", data);
      this.questionsList = data;
      //loadQuestions(data))
    })

    this.route.queryParams.subscribe(params => {
      console.log("params received in review page = ", params);
      this.submittedAnswers = params.submittedAnswers;
    })
  }

  goToHome(){
    this.router.navigate(['/userhome'])
  }

  goBack(){
    this.router.navigate(['/results'])
  }

}
