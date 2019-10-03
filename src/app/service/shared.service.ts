import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SharedService {
  private baseUrl = "http://localhost:8082/api/";

  constructor(private http: HttpClient) {}
  private _getHeaders(): Headers {
    let header = new Headers({
      "Content-Type": "application/json"
    });

    return header;
  }
  getMutualFriends(user1: string, user2: string): Observable<object> {
    var headers = new Headers({ "Content-Type": "application/json" });
    return this.http.post(
      `${this.baseUrl}` + "findMutual",
      user1.concat(",").concat(user2)
    );
  }
}
