import React from 'react'
import { inject, observer } from 'mobx-react'
import '../../assets/css/Sort/index.css'
import { Link } from 'react-router-dom'
import Nav from './nav'
@inject('CategoryStore')
@observer

class Sort extends React.Component {
    constructor() {
        super()
        this.state = {
            index: 0,
            imgUrl: [
                [
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567136978231&di=2a3559c56f0dc6e10fbb60d9918a5d5a&imgtype=0&src=http%3A%2F%2Fimg1.7wsh.net%2F2016%2F7%2F10%2F20160710181106154.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567137151867&di=474d57baf3ae6e42f7fc07f850133b03&imgtype=0&src=http%3A%2F%2Fimg.shushi100.com%2F2017%2F03%2F29%2F1490778082-7309587724121363.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567137232904&di=fe77b5884af6ee60336451ddbde42585&imgtype=0&src=http%3A%2F%2Fupload.semidata.info%2Fnew.eefocus.com%2Farticle%2Fimage%2F2018%2F03%2F22%2F5ab310e92e9aa-thumb.png",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567137287262&di=3dd19eed7eb2d18d860ce307d15d75aa&imgtype=0&src=http%3A%2F%2Fimg.365azw.com%2FAttachments%2Fshare%2F201703%2F58c9ea57a164b.jpg%2521article.w.p",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567137459476&di=a61bc17d66d8f3ce5cb2792fed9c73ed&imgtype=0&src=http%3A%2F%2Ftgi1.jia.com%2F116%2F204%2F16204182.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567137496672&di=527d32611b12394ae76cf3f0cae7234c&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D4257411355%2C3897979245%26fm%3D214%26gp%3D0.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567137537907&di=1e59fd926d36a63272a80f9fac990bae&imgtype=0&src=http%3A%2F%2Fimg3.qjy168.com%2Fprovide%2F2014%2F12%2F02%2F4718326_20141202130631.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567137657726&di=8cfad578e64442c2c7ea87b529342947&imgtype=0&src=http%3A%2F%2Fpic.66zhuang.com%2Farticle%2Fpics%2Fimage%2F2015-02-27%2Fd4e08bca3e61556b53d829e4c81f516c.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567732417&di=1b6d2a4198cdcb72c3053752717d6c1c&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.whxy898.com%2Fhx%2FUpload%2F201801%2F5a4dc9855ec1d.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567137715945&di=a159683baeb13a2e7563aede7185bdd3&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F06%2F40%2F20300543413690147667403438683.jpg"
                ],
                [
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567141735333&di=467271c05373531ea8ac411b65b67c1e&imgtype=0&src=http%3A%2F%2Fi4.hexun.com%2F2018-11-12%2F195179863.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567141761452&di=04413907bc4ae174da40a86da01f0d8e&imgtype=0&src=http%3A%2F%2Fimgs.bzw315.com%2FUploadFiles%2Fimage%2F2017%2F2%2F8%2F201702081031036640.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567139568329&di=09b3dc9b2d84863559be92b44c05bb31&imgtype=0&src=http%3A%2F%2Fupload.qianlong.com%2F2016%2F0818%2F1471507390798.png",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567139593705&di=930760440434233110d088e4011cb283&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F35a85edf8db1cb13d640fcb7d654564e92584b6d.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567139622174&di=8559f46eaaf3a7fa04e79a849f5f0a5b&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fproduct%2F6316%2F631606%2Fzheng_m2.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567139650967&di=52778cad8d77f9c819d294ef0157621d&imgtype=0&src=http%3A%2F%2Fwww.canon.com.cn%2Fproducts%2Fdv%2Fxf100%2Fimages%2Fphoto_xf100_1.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567139711360&di=898c0cf890ae94f39a0cd9701b0a6f3b&imgtype=0&src=http%3A%2F%2Fimg.it610.com%2Fimage%2Finfo1%2F99cadca81e5e437ea3fba38ea1d752f0.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567139740083&di=42cfbca39445c8656467eae4a80a9fe8&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fhouselib%2F1312%2F26%2Fc0%2F30030686_1388062471312_650x500.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567139764230&di=680421bb3dc5d85a3aaec2de2b109e58&imgtype=0&src=http%3A%2F%2Fimage.cnpp.cn%2Fupload2%2Fimages%2F20110808%2Fknowledge_1312792599_7690_1.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567141415300&di=4cfb61699d3f7dfbb6b2e0f8711dfd45&imgtype=0&src=http%3A%2F%2Fec4.images-amazon.com%2Fimages%2FI%2F71lAY34wSoL._SL1500_.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567141440237&di=1fd0e94adae8305093810f41cc93b508&imgtype=0&src=http%3A%2F%2F2a.zol-img.com.cn%2Fproduct%2F59_450x337%2F448%2Fce9XWZMSGFbUY.gif",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567141548965&di=4b3a0e6eff919bc4e5c335ae120557c2&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft700%2F65%2F1462111137%2F217468%2F44c8cef0%2F5540a635neeaaad1b.jpg%2521q70.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567141577360&di=97524b9ffe2bddbe5188f46a61869acd&imgtype=0&src=http%3A%2F%2Fs16.mogucdn.com%2Fp1%2F160411%2F112107435_ie4dsmtdgyzgiyteg4zdambqgiyde_640x960.jpg_468x468.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567141605758&di=1c933a0502c22fbf9c0056cb16dbb3dd&imgtype=0&src=http%3A%2F%2Fsy0.img.pcpop.com%2Fcopy%2Fucb%2F0%2F675%2F675685%2F0%2F675%2F675685.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567736358&di=935d3c1f23da69497f86979174a5fce2&imgtype=jpg&er=1&src=http%3A%2F%2Fjj-crawl-img.bjctc.img.sohucs.com%2F1cef25e4357901e15762c97e10c4b1af.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567141656225&di=ef002298c41dafb14fe70a56925f6f4b&imgtype=0&src=http%3A%2F%2Fimg.chinapp.com%2Fuploadfile%2F20130423%2Fa9ba790ca47ea00b2cdb0f19577c866f.jpg"
                ],
                [
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567141832738&di=ffd709d9dc14b79bc4fd7048bc6e017b&imgtype=0&src=http%3A%2F%2Fimage.it168.com%2Fn%2F640x480%2F6%2F6718%2F6718563.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567141873955&di=fd4a53117fd40ccfc8eb0ccb31401377&imgtype=0&src=http%3A%2F%2Fimage20.it168.com%2F201308_500x375%2F1543%2Ff22b4cd05d123b7b.png",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567141895925&di=ac26e95bbd6f7894feb989e9dc28aa9a&imgtype=0&src=http%3A%2F%2Fzhaichong.com%2Fd%2Ffile%2Fnetgames%2Fshouyou%2F2014-07-30%2F66c345278d0e8729296a0528e0beb5ad.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567141947182&di=d07cb07425e65669efce2350a15d3d43&imgtype=0&src=http%3A%2F%2Fimg2.zol.com.cn%2Fproduct%2F73%2F732%2Fceilmu27wGLkw.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567141988524&di=2c03a59c459b7a9a9fe533c6a7665c2b&imgtype=0&src=http%3A%2F%2Fpuff.hk%2Fwp-content%2Fuploads%2F2015%2F01%2F650.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142010736&di=877857c73abb6819aea78fad09c32e44&imgtype=0&src=http%3A%2F%2Fnews.mydrivers.com%2Fimg%2F20110413%2F05113281.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142010736&di=877857c73abb6819aea78fad09c32e44&imgtype=0&src=http%3A%2F%2Fnews.mydrivers.com%2Fimg%2F20110413%2F05113281.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567736785&di=7c6e3c5c6e244323a48f832d49ca551f&imgtype=jpg&er=1&src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft1234%2F70%2F170038911%2F160112%2Fc0720430%2F5506e2d7N78297872.jpg%21q70.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142117488&di=dbf0e819cf96f753eaee8a4fd3ef110b&imgtype=0&src=http%3A%2F%2Fpic3.58cdn.com.cn%2Fzhuanzh%2Fn_v23b944bb4903341b2bec901eb2274e3e0.jpg%3Fw%3D750%26h%3D0",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142139840&di=654f587413b1fd964acb245ff3294cbc&imgtype=0&src=http%3A%2F%2Fimg05.huishangbao.com%2Ffile%2Fupload%2F201401%2F06%2F14%2F14-48-54-13-267996.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142170466&di=fa10411e19841cebe3b713dcfc8ef0db&imgtype=0&src=http%3A%2F%2F2e.zol-img.com.cn%2Fproduct%2F4_1200x900%2F822%2FceStBCaLqReqQ.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567736916&di=c234c0477c552f3d9f8ee1d4b0cfd1a6&imgtype=jpg&er=1&src=http%3A%2F%2Fask-fd.zol-img.com.cn%2Fg5%2FM00%2F09%2F0C%2FChMkJ1nv_cyIACKFAADQmO2b31AAAhh3APC7QwAANCw659.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142214470&di=9c61dc128d24c62dc6c1ffe08ec35bbb&imgtype=0&src=http%3A%2F%2Fwww.pcdiy.com.tw%2Fwebroot%2Fdata%2Fmedia%2Fd136ac7a158f2f4341dae44479aa367f.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142261846&di=70e616e43d6b916ec7802611769c45da&imgtype=0&src=http%3A%2F%2Fimg003.file.rongbiz.cn%2Fuploadfile%2F201406%2F19%2F06%2F20-06-52033.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142360598&di=8f20e1691003ea0f2e79315b994fef82&imgtype=0&src=http%3A%2F%2Fimg.sccnn.com%2Fbimg%2F338%2F15910.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142400799&di=ca9d6765e6e6fcd391356faad4c458d0&imgtype=0&src=http%3A%2F%2Fimage2.suning.cn%2Fuimg%2Fb2c%2Fnewcatentries%2F0070150178-000000000634267493_1_800x800.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142421008&di=e0cd73ffba301df0b7778a90dccefcb0&imgtype=0&src=http%3A%2F%2Fs2.51cto.com%2Foss%2F201811%2F15%2F87e278a15db6e144acd641367b6ed670.jpg-wh_651x-s_1809553409.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142454887&di=392045956903c2b3c0506d8cc2228c9a&imgtype=0&src=http%3A%2F%2Fimg003.hc360.cn%2Fm6%2FM04%2F9F%2F28%2FwKhQoVbWi8-EAE3sAAAAAJ178H0777.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142471409&di=03832c4ffdc0d6ba7330f3a5669cbe4b&imgtype=0&src=http%3A%2F%2Fimg1.mydrivers.com%2Fimg%2F20170818%2FS8055d171-1701-4c8d-8140-e0e5f3611923.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142506654&di=51314b7390320f519c37608566efee31&imgtype=0&src=http%3A%2F%2Fimg05.huishangbao.com%2Ffile%2Fupload%2F201401%2F06%2F14%2F14-48-54-13-267996.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142524414&di=022a7f9bf38fff8db477fe49cd5c9be6&imgtype=0&src=http%3A%2F%2Fimg0w.pconline.com.cn%2Fpconline%2F1405%2F14%2Fspcgroup%2Fwidth_640%2Cqua_30%2F4770737_111.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567737274&di=f34e561a8868cbb99628971e3ebcaabb&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20140515%2F20140515201411-1214830048.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142576384&di=4f041468f9a3556b46fd0be2d40e2c5a&imgtype=0&src=http%3A%2F%2Fimg.11665.com%2Fimg07_p%2Fi7%2FT1.uOZXcNjXXcX4o.9_104847.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142619495&di=14ee75f59efd90885a22d25fe1abe618&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi1%2FTB2o1OsoMMPMeJjy1XbXXcwxVXa_%2521%25211837612897.jpg_400x400.jpg"
                ],
                [
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142714003&di=1a4bd130c20b547c69484436151d621d&imgtype=0&src=http%3A%2F%2Fpic.66zhuang.com%2Fzxrj%2Fpics%2Fimage%2F2015-01-22%2Fd9897542af62d488d03d0c8f5470a477.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142731015&di=9b7dd66e3fd35c0f98f9b7f33b8d67ca&imgtype=0&src=http%3A%2F%2Fs10.sinaimg.cn%2Fmw690%2F00346Sqogy6Jp8uGLVL09",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142750142&di=fe67eb1fb2363f7f2d3505508e5d06f6&imgtype=0&src=http%3A%2F%2Fstatic-news.17house.com%2Fweb%2Ftoutiao%2F201705%2F11%2F14944645871552632185.png",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142783261&di=659c8b4a5e5c69046e975f0d8100549b&imgtype=0&src=http%3A%2F%2Fa.vpimg3.com%2Fupload%2Fmerchandise%2F3542%2FFLYCO-FI9806-1.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142802104&di=e6dc7d54fe2d8276fc301bd2c116ac94&imgtype=0&src=http%3A%2F%2Foss.huangye88.net%2Flive%2Fuser%2F1956166%2F1476167528099524300-0.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142823318&di=da63520d2aafe01e71b264dc3c6d1558&imgtype=0&src=http%3A%2F%2Fjj-crawl-img.bjctc.img.sohucs.com%2F7ac6063f418f27cd18d36b5b843d4bbd.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142849009&di=7c397ab7ed02c2df7eb0b1387a049bac&imgtype=0&src=http%3A%2F%2Fwww.biyebi.com%2FAttachments%2Fbaike%2F201511%2F564000bbdef13.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142881565&di=272d44020ed8a3c2f975466058b7da8e&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181012%2F1d021a4d96e248fcac33749a7a3b7303.jpeg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142918546&di=b8c92889b7a21560dee75900c07eb64a&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F0c7cd419bbf76c398d766d19dff73f19160183811fa89-KbzQSv_fw658",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567142938989&di=5ac42be98aac5d5d1d507c3db3efb6f2&imgtype=0&src=http%3A%2F%2Ffile05.zk71.com%2FFile%2FCorpProductImages%2F2013%2F01%2F31%2F0_shuichulishebei_8212_20130131170416.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567143014328&di=9d6c2605e5ae2498d2e5acc249d34cee&imgtype=0&src=http%3A%2F%2Fimg.shushi100.com%2F2017%2F09%2F26%2F1506436193-6265270678837894.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567143067103&di=4ab195d24e588bc865d1e181c5d8b532&imgtype=0&src=http%3A%2F%2Fwww.qianjia.com%2FUpload%2FNews%2F20180918%2Fimages%2F201809181131488478.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567143152267&di=251cd81a110840a5ce261cd0a604e6ea&imgtype=0&src=http%3A%2F%2Fjs.cdnjm.cn%2F201908%2F16%2F105637DB2D7B30-113C-41D7-789F-4223FDB3FC02-1.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567143305556&di=c4be2ad0ffe233159850fa86f2b62df5&imgtype=0&src=http%3A%2F%2Fb2b.haier.com%2Fupload%2F20190202%2F64549313-e1e5-45a3-83d5-dcf8a2fa8979%2Fword%2Fmedia%2Fimage1.jpeg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567738048&di=2c261d55b809f4dfe539092ab9ca556a&imgtype=jpg&er=1&src=http%3A%2F%2Fcdn.178hui.com%2Fupload%2F2017%2F0912%2F16160640020.jpg",
                    "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4264441188,3284489797&fm=26&gp=0.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567143402528&di=b242ec312d960bdb80424472a7b4ddf2&imgtype=0&src=http%3A%2F%2Fimg.shushi100.com%2Fimages%2F3e77a4b6-a00d-46cf-a913-7cddc775ff9a.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567143448052&di=664cabdbfb517ed4f274148bce39aa5f&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft2776%2F354%2F1920530108%2F56909%2F5c6de5fa%2F574e875bN2991eb50.jpg%2521q70.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567143488713&di=fdd8404c3998a3763d019dd2990bf70e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201301%2F14%2F20130114163714_5PFc5.jpeg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567143541308&di=5c047cb2bdddd5a24f33d51589def6cb&imgtype=0&src=http%3A%2F%2Fimg001.hc360.cn%2Fk3%2FM00%2F98%2F81%2FwKhQx1grs62EfMKXAAAAAAx5E_U241.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567143571739&di=3d4f0c00163d906fac68be976789d09f&imgtype=jpg&src=http%3A%2F%2Fy.zdmimg.com%2F201811%2F03%2F5bddb52a47b838395.jpg_a200.jpg",
                    "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1692064396,3469595853&fm=15&gp=0.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567143711676&di=6d76236602db541319ced34837acfc6d&imgtype=0&src=http%3A%2F%2Ftgi13.jia.com%2F116%2F145%2F16145338.jpg"
                ],
                [
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567143800612&di=12d3738b23ff9884c2c0168ad1fd41e1&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F06%2F40%2F20300543413690147667403438683.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567143849015&di=281009e594950e72b98be14fc7e00cd7&imgtype=0&src=http%3A%2F%2Fimg.365azw.com%2FAttachments%2Fnews%2F201807%2F5b399e864d59e.jpg%2521article.w.p",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567144121434&di=a7b8243eadb675793c2c160617ed416f&imgtype=0&src=http%3A%2F%2Fpic2bj.shejibao.com%2F20160621%2F127%2F423d790912b981a5d47a54e5b8e17b11.jpg%40%2521width_800",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567144151414&di=78302429528cb0240b5e327749079293&imgtype=0&src=http%3A%2F%2Fd6.yihaodianimg.com%2FN05%2FM0B%2FB1%2F30%2FChEbuleV9iqAXxVbAANxmY1ezSE67001_750x750.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567144191930&di=220984230c51ee9c9090ba3b27d0b776&imgtype=0&src=http%3A%2F%2Fimg.shushi100.com%2Fimages%2F03518cd5-b1bc-4de3-aa77-25c8e33994d3.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567144229640&di=abcad3e7ff44330fec3aedd3e23eb85d&imgtype=0&src=http%3A%2F%2Ftemp.npicp.com%2F1512357139gvaiL5.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567144253348&di=72f18132d024c203ac77a45c0cce0d40&imgtype=0&src=http%3A%2F%2Fimg5.pcpop.com%2FArticleImages%2F730x547%2F4%2F4328%2F00432844830665515.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567144871616&di=c91d6b959fa1ca20435c2923ec318870&imgtype=0&src=http%3A%2F%2Fwww.ehaipu.cn%2Fimages%2F201605%2Fsource_img%2F36259_P_1464252829233.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567144903484&di=61b3dd298490bde9dda009689d9520be&imgtype=0&src=http%3A%2F%2Fec4.images-amazon.com%2Fimages%2FI%2F61HmNc-wB%252BL._SL1000_.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567144926278&di=fd4854770cfff504c08fbf95d9690186&imgtype=0&src=http%3A%2F%2Fpic.z4bbs.com%2Fforum%2F201604%2F16%2F130019ylwwosejoojpow80.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567144954891&di=0cc257c88176ecac31ee958a09f652ef&imgtype=0&src=http%3A%2F%2Fimage4.suning.cn%2Fuimg%2Fb2c%2Fnewcatentries%2F0000000000-000000000123310029_4_800x800.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567144979868&di=57d98912131242c066c1bba0db2888c4&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Fbao%2Fuploaded%2Fi1%2FT11tuDXrJbXXcCfOE7_065143.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567145020777&di=d6618b1eb48f953a32c7b14af3a10a90&imgtype=0&src=http%3A%2F%2Fimg.shushi100.com%2F2018%2F03%2F08%2F1520468187-1936013238939727.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567145043826&di=6d320a10cb3e9a79cb40ce35419101c3&imgtype=0&src=http%3A%2F%2Fpic.trustexporter.com%2Fupload3%2F2015-03-31%2F2799041545530273.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567145081630&di=3fe6395fb4321351f32d13efbcc69169&imgtype=0&src=http%3A%2F%2Fimg12.360buyimg.com%2Fn1%2Fjfs%2Ft310%2F301%2F1510892560%2F39842%2Fc279ce4c%2F543ccd76N171cca2b.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567145115492&di=699298eee36bdd4f6a938d778f7de233&imgtype=0&src=http%3A%2F%2Fimg004.hc360.cn%2Fk1%2FM08%2F8D%2F9B%2FwKhQw1kBkPqER1xrAAAAAIFQv6c313.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567145137336&di=70cdb1ece22404716325c455ada3b9f0&imgtype=0&src=http%3A%2F%2Fimg.shushi100.com%2F2018%2F07%2F20%2F1532052082-5255295159134255.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567145161054&di=dbd93a6b801544ace75d262dbe25f7d3&imgtype=0&src=http%3A%2F%2Fimg.hc360.com%2Fhome-a%2Finfo%2Fimages%2F200612%2F20061220-B4.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567145176806&di=55faee49afd2bc11362eb988eaf81818&imgtype=0&src=http%3A%2F%2Fwww.biyebi.com%2FAttachments%2Fbaike%2F201605%2F5746a46f9741f.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567739923&di=2360691d67d8e0e39a1d65e1a01df4b2&imgtype=jpg&er=1&src=http%3A%2F%2Fimg2.e0575.com%2Fupload%2Fw%2F2013-03-10%2Feb66092df0b3c41ca58f51524c06554b.jpg",
                    "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=354881462,3586414465&fm=15&gp=0.jpg"
                ],
                [
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567145354624&di=2039816a03c545ed9e64aa5e54c276a6&imgtype=0&src=http%3A%2F%2Fsy0.img.pcpop.com%2Farticle%2F0%2F715%2F715207.jpg_p-w500",
                    "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3754210324,2573262935&fm=26&gp=0.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567740162&di=9d6b1669da02bbdaeca4ad825612d335&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.pclady.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Flady_cosme%2F1608%2F25%2Fc0%2F26076077_1472138420277_400x400.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567145476196&di=799a1953949be9ab2256ff379ee173e9&imgtype=0&src=http%3A%2F%2Fimg.99114.com%2Fgroup10%2FM00%2FE1%2FFD%2FrBADs1odggmAdp4KAABH_3zjs3k673.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567145520196&di=a1749950edb236c51deb294476ab7b4a&imgtype=0&src=http%3A%2F%2Fimg.ugoshop.com%2Fimages%2F201605%2Fsource_img%2F71792_P_1464630835458.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567145561780&di=49c97acbec1caa9dea059416feddce47&imgtype=0&src=http%3A%2F%2Fa.vpimg2.com%2Fupload%2Fmerchandise%2F89949%2FHUNHE-6942256212643-1_1.jpg"
                ],
                [
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567740337&di=c1284657d7f8016c4c9ae4c3482c9b7d&imgtype=jpg&er=1&src=http%3A%2F%2Fec4.images-amazon.com%2Fimages%2FI%2F518BPtTPTVL.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567740365&di=b9d74d39f387aa5a5188c1aa9c4f152e&imgtype=jpg&er=1&src=http%3A%2F%2Fimg011.hc360.cn%2Fy2%2FM02%2F0F%2FFE%2FwKhQdFSYvJ6EeeIIAAAAAKOucD0366.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567145681766&di=07fad35899054111107925dc748ec0a7&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fbmiddle%2F002gM1rvzy6QQ8Rn2Lh13%26690",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567740438&di=c2d4735a9ac2eb6d144fe1ab66cfb6cf&imgtype=jpg&er=1&src=http%3A%2F%2Fimg003.hc360.cn%2Fg6%2FM07%2F14%2FCF%2FwKhQsVQLspmEJdYeAAAAALN9Czo880.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567145738890&di=a52dded2753d8ea6989ac8903111112b&imgtype=jpg&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161208%2F25e29dcd00024077b995edeec0ca7065.jpeg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567145760148&di=8ec41f811b5f4c62b244df23d4f94f41&imgtype=0&src=http%3A%2F%2Fimg.365azw.com%2FAttachments%2Fshare%2F201703%2F58d5cbf6ecd8b.jpg%2521article.w.p",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567145778964&di=928689a9cbcb44cad5e4339d4b71a613&imgtype=0&src=http%3A%2F%2Fimg.99114.com%2Fgroup10%2FM00%2F1E%2F08%2FrBADs1oQkGyAEtYlAAAtDBMmlbs334.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567740535&di=2957766d30217455a92b5d5c7bfc7ac0&imgtype=jpg&er=1&src=http%3A%2F%2Fdpic.tiankong.com%2Flh%2F1t%2FQJ6925564210.jpg%3Fx-oss-process%3Dstyle%2Fshow"
                ],
                [
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567740671&di=9436fd19e8cd0a4ffa18d631866323db&imgtype=jpg&er=1&src=http%3A%2F%2F0.image.kw.okbuycdn.com%2Fstatic%2F38eba57f6bb7b4996b7614e37e8fe5f7.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567145973541&di=a246cd6b9672e337ce98503923e54248&imgtype=0&src=http%3A%2F%2Fi1.ygimg.cn%2Fpics%2Fcne%2F2016%2F100402564%2F100402564_01_l.jpg%3F3",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567146003594&di=faba88103a4674dfd984e73a3356cd70&imgtype=0&src=http%3A%2F%2Fimage3.suning.cn%2Fuimg%2Fb2c%2Fnewcatentries%2F0000000000-000000000821737416_4_800x800.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567740747&di=754292120b4951a4afdce78aa47470aa&imgtype=jpg&er=1&src=http%3A%2F%2F0.image.kw.okbuycdn.com%2Fstatic%2F1ac314cd16fd6079ac2ef3a94a0d68f1.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567146038192&di=f5479859c32914ddf7fac90b5b796a43&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201307%2F11%2F20130711165120_hdQrC.jpeg"

                ]
            ] 
        }
    }

    componentWillMount() {
        const { getCateTitle, getCate } = this.props.CategoryStore
        getCateTitle()
        getCate(0)
    }

    changeSort(index) {
        const { getCate } = this.props.CategoryStore
        getCate(index)
        this.setState({
            index
        })
    }

    render() {
        const { titles, content } = this.props.CategoryStore
        const src = this.state.imgUrl[this.state.index]
        return (
           <div>
               <Nav/>
               <div className="sort_item">
                <ul className="sort_title">
                    {titles.map((item,index)=>(
                        <li className="sort_left" key={index} onClick={this.changeSort.bind(this,index)}>
                            <p>{item.title}</p>
                        </li>
                    ))}
                </ul>
                <ul className="sort_right">
                    {content.map((item,index)=>(
                        <Link to={"/category/list"+"?id="+item.categoryId} key={item["_id"]} className="item_lis">
                            <p>
                                <img src={src[index]} />
                            </p>
                            <p>
                                {item.category}
                            </p>
                        </Link>
                    ))}
                </ul>
            </div>
           </div>
        )
    }
}

export default Sort