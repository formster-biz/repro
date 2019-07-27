import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  task: AngularFireUploadTask; 

  constructor(
    private storage: AngularFireStorage
    ) { }
}
