export class Career {
    public id;
    public name;
    public categoryName;
    public shortDesc;
    public longDesc;
    public picture;
    public alias;
    public picturePath;
    public cateId;
    public sort;
    public url;
    public meta;
    public metaDesc;
    public metaKey;
    public metaTitle;
    public date;
    public isShow;

    constructor(data) {
        this.id = data.post_id;
        this.name = data.post_name;
        this.categoryName = data.cate_name;
        this.shortDesc = data.post_shortdesc;
        this.longDesc = data.post_longdesc;
        this.picture = data.post_picture;
        this.sort = data.post_sort;
        this.cateId = data.post_cateid;
        this.isShow = data.post_publish;
        this.metaDesc = data.post_metadesc;
        this.metaKey = data.post_metakey;
        this.metaTitle = data.post_metatitle;
        this.date = data.post_datepublish;
        this.meta = data.post_meta ? JSON.parse(data.post_meta) : {};
        this.alias = data.alias_name;
        this.picturePath = null;
        this.url = null;
    }
}
