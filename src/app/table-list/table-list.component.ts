import { Component, OnInit } from '@angular/core';
import { Contributor } from 'app/models/contributor';
import { Task } from 'app/models/task';
import { ContributorsService } from 'app/services/contributors/contributors.service';
import { TasksService } from 'app/services/tasks/tasks.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  tasks: Task[] = [];
  contributors: Contributor[] = [];

  constructor(private taskService: TasksService,
              private contributorService: ContributorsService) { }

  ngOnInit() {
  }

  startSubscription() {
    this.taskService.getTasks().subscribe(res => {
      this.tasks = res;
    })

    this.contributorService.getContributors().subscribe(res => {
      this.contributors = res;
    })
  }

}
