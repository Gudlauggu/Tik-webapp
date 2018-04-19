import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { UploadTask } from './upload-task';

@Injectable()
export class FileService {

  constructor(private afso: AngularFireStorage) { }

  upload(path: string, file: File): UploadTask {
    const task = this.afso.upload(path, file);
    return {
      downloadUrl: task.downloadURL()
    };
  }

}
