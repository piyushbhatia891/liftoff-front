import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, Validators, FormBuilder, FormArray } from "@angular/forms";
import { SharedService } from "./service/shared.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "liftOff-app";
  formVal: any;
  userName1: string = "";
  userName2: string = "";
  result: any;
  constructor(private fb: FormBuilder, private mutualService: SharedService) {}
  ngOnInit() {
    this.formVal = this.fb.group({
      userName1: ["", Validators.required],
      userName2: ["", Validators.required]
    });
  }
  onSubmit() {
    if (this.userName1 == "" || this.userName2 == "") {
      alert("Please enter name");
      return false;
    }
    this.mutualService
      .getMutualFriends(this.userName1, this.userName2)
      .subscribe(
        (data: any) => {
          this.result = data.message;
        },
        error => console.log(error)
      );
  }
}
