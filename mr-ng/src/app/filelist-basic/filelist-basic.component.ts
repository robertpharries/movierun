import { Component, OnInit } from '@angular/core';
import { FilesService } from '../files.service';

@Component({
  selector: 'filelist-basic',
  templateUrl: './filelist-basic.component.html',
  styleUrls: ['./filelist-basic.component.css']
})
export class FilelistBasicComponent implements OnInit {

  files_listAll: String[];

  constructor(private fileService: FilesService) { }

  ngOnInit() {
    this.getAllFiles();
  }

  getAllFiles(): void {
    this.fileService.get_listAllFiles().subscribe(data => this.files_listAll = data);
  }

}
