import {
  Component,
  Renderer2,
  Inject,
  Input,
  AfterViewChecked,
  NgZone,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-tawk',
  templateUrl: './tawk.component.html',
  styleUrls: ['./tawk.component.scss'],
})
export class TawkComponent implements AfterViewChecked {
  @Input() id: string;
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document,
    private zone: NgZone,
  ) {}

  ngAfterViewChecked() {
    this.appendScript();
  }

  private appendScript() {
    this.zone.runOutsideAngular(() => {
      const s = this.renderer.createElement('script');
      s.text = `var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
      (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/${this.id}/default';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      })();`;
      this.renderer.appendChild(this.document.body, s);
    });
  }
}
