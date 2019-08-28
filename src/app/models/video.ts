export class Video {
  public thumb;
  public description;
  public title;
  public hot;
  public file;
  public iframeUrl;
  public date;
  constructor(data) {
    this.thumb = data.media_thumb;
    this.description = data.media_description;
    this.title = data.media_title;
    this.hot = data.media_ishot;
    this.file = data.media_file;
    this.date = data.media_datecreated;
    this.iframeUrl = '';
  }
}
