import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  Renderer2,
  Inject,
  NgZone,
  AfterViewChecked,
  PLATFORM_ID,
} from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';
import { Clinic } from '../../models/clinic';
import { UrlService } from '../../services/url.service';
import { ClinicService } from '../../services/clinic.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  public blogs: Array<Blog> = [];
  public clinics: Array<Clinic> = [];
  private subsciption: Subscription;

  constructor(
    public blogService: BlogService,
    public clinicService: ClinicService,
    private translate: TranslateService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document,
    @Inject(PLATFORM_ID) private platformId,
    private zone: NgZone,
  ) {}

  ngOnInit() {
    this.appendFacebookBox();
    this.loadFeatureBlogs();
    this.loadFeatureClinics();
    this.subsciption = this.translate.onLangChange.subscribe(() => {
      this.loadFeatureBlogs();
      this.loadFeatureClinics();
    });
  }

  appendFacebookBox() {
    // if (isPlatformBrowser(this.platformId)) {
    //   this.zone.runOutsideAngular(() => {
    //     const url =
    //       'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v4.0&appId=365507434348874&autoLogAppEvents=1';
    //     if (!document.querySelector(`script[src='${url}']`)) {
    //       const script = document.createElement('script');
    //       script.src = url;
    //       script.crossOrigin = 'anonymous';
    //       script.async = true;
    //       script.defer = true;
    //       this.renderer.appendChild(this.document.body, script);
    //     }
    //   });
    // }
  }

  ngOnDestroy() {
    if (this.subsciption) {
      this.subsciption.unsubscribe();
    }
  }

  loadFeatureBlogs() {
    this.blogService.fetchFeature().subscribe((data: any) => {
      const posts = data.Posts || [];
      this.blogs = posts.map(post => {
        const blog = new Blog(post);
        // blog.picturePath = UrlService.createPictureUrl(blog.picture);
        if (blog.meta.picture) {
          blog.picturePath = UrlService.createPictureUrl(
            blog.picture,
            null,
            null,
            true,
          );
        } else {
          blog.picturePath = UrlService.createPictureUrl(blog.picture);
        }

        blog.url = UrlService.createNewsDetailUrl(blog.alias);
        blog.name = blog.name.replace(/^(.{20}[^\s]*).*/, '$1');
        return blog;
      });
    });
  }

  loadFeatureClinics() {
    this.clinicService.fetchFeature().subscribe((data: any) => {
      const posts = data.Categories || [];
      this.clinics = posts.map(post => {
        const clinic = new Clinic(post);
        clinic.picturePath = UrlService.createPictureUrl(
          clinic.picture,
          null,
          'category',
        );
        clinic.url = UrlService.createClinicDetailUrl(clinic.alias);
        return clinic;
      });
    });
  }
}
