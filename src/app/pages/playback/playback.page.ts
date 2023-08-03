import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playback',
  templateUrl: './playback.page.html',
  styleUrls: ['./playback.page.scss'],
})
export class PlaybackPage implements OnInit {

  type: string | null = '';

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
  }

  botaoVoltar() {
    window.history.back();
  }
}
