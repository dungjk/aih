export class Feedback {
  public thumb;
  public title;
  public file;
  public desc;
  public iframeSrc;
  public longdesc;
  constructor(data) {
    this.title = data.media_title;
    this.file = data.media_file;
    this.desc = data.media_description;
    this.longdesc = data.media_longdesc;
    this.thumb = data.media_thumb;
    this.iframeSrc = null;
  }
}
