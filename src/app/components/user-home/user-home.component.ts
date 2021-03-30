import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  closeResult = '';
  testSubjects = [
    "ANGULAR",
    "NODEJS",
    "MONGODB",
    "REACTJS",
    "PYTHON",
    "AWS",
    "AZURE"
  ]

  constructor(private route : Router, private toastr: ToastrService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content) { 
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => { 
      this.closeResult = `Closed with: ${result}`; 
      console.log(result)
      if(result === "Start"){
        console.log("navigate hereeee to exam....");
        this.route.navigate(['/questionshome']);
      }
    }, (reason) => { 
      this.closeResult =  
         `Dismissed ${this.getDismissReason(reason)}`; 
         console.log("dismiss = ", this.closeResult)
    }); 
  } 
  
  private getDismissReason(reason: any): string { 
    if (reason === ModalDismissReasons.ESC) { 
      return 'by pressing ESC'; 
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) { 
      return 'by clicking on a backdrop'; 
    } else { 
      return `with: ${reason}`; 
    } 
  } 

  enterExam(subject){
    console.log("subject = ", subject);

    if(subject !== "ANGULAR"){
      this.toastr.info('Test coming soon... meanwhile you can try online test on Angular. Good Luck!', '', {
        timeOut: 4000
      });
      return;
    }
    
    this.route.navigate(['/questionshome']);
  }

}
