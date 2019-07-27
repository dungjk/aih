export class Doctor {
  public id;
  public name;
  public categoryName;
  public shortDesc;
  public longDesc;
  public picturePath;
  public picture;
  public alias;
  public url;
  public doctorId;
  public isExpanded;
  public meta;

  constructor(data) {
    this.id = data.post_id;
    this.name = data.post_name;
    this.alias = data.alias_name;
    this.categoryName = data.cate_name;
    this.shortDesc = data.post_shortdesc;
    this.longDesc = data.post_longdesc;
    this.picture = data.post_picture;
    this.doctorId = data.post_elem01;
    this.picturePath = null;
    this.isExpanded = false;
    this.meta = JSON.parse(data.post_meta || '{}');
  }
}
