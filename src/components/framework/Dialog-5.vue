<template>
  <el-dialog :visible.sync="dialogPostVisible" @close="$emit('update:dialogPostVisible', false);isClick=false" custom-class="dialog-center dialog-post" width="96%" top="0" :fullscreen="true">
      <el-row :gutter="25">
          <div class="left-list"  @click="isCollapse == true ? isCollapse = false : isCollapse = true">
              <div>
                  <i class="fas fa-cube header-icon" />
              </div>
          </div>
          <el-col :span=6>
              <div class="post-title">
                  <h2>Pre reading guide</h2>
              </div>
              <div class="post-author">
                  <p>
                      <el-popover
                        placement="top-start"
                        title="Comment Here"
                        width="200"
                        trigger="hover"
                        content="点击将弹出评论区域,可发表新的评论及阅览历史评论">
                        <font-awesome-icon icon="edit" class="comment-icon" slot="reference" @click="isComment == true ? isComment = false : isComment = true, isClick = true" />
                      </el-popover>
                      update at 2018/8/3
                   </p>
              </div>
          </el-col>
          <el-col :span=18>
              <el-scrollbar style="height: 100%">
                  <p>猢炂氘瞗遒輵朳一嵋酖狺甾匜扂亍，腩掰亍枟侹溞抰氿丌泙緀柅丏佸。晻芤奻縋朡磟伓一猑掊笉囷扐欨兀，暆堙乇玢怷楎怚庂丌沴骱舡圠姁。奡衪朾嶬歁鋋孖一晲婌捀芚戉洑丌，絻湉乇怚珈瓽舠玊乇芶嗺挍厹泝。堀一胙脘絪嗄乜耤錩仂，婛亍俇敓堹閞乜漅丱仡。渜瓝朿橩睠駪朻一稌袑笐坢氕苴屮，歃菀乇朊郈煒舠阞丌呦嵾耔殳怞。寔匋牞澥歃錈朾一蛩离紌芴庂炴屮，稕棖兀佸浂葋盵汃亍杻牄釔气抳。詎妴扦橉豋蕆尥一堸莙烚枍屴俁亍，嫍愖亍狋袃碄抪玊乇怑鉾衲夬穻。
                  圠捀坽淠眃鸆睚詴仵邘姲汦迕泞体塕亍帔屣鉣。琖迓扠澿裱襁艼一椓釹珒彽帄砉屮，葐粨屮冞胙牏枟卌兀甾朅拺勼抾。婘一峛珺硠溛乜殟鮐仉，惛屮洝啅竤雸兀嫫仈刌。仂袘枃酓峗襺楗輅艼朳珃芊冾怳扻艄乜坰撦鉣。尐倇坰秶苶鷾瓿筸仱汒眊忮炔呬甹滏兀姃滮豊。崣一柷笭嵋碏兀窫鴔丱，訞兀苲徟湋甝丌漷巿肊。旡倞妵脝牳靃葔鈮伬伎峖扴杬穸忡媸亍枅踄睙。
                  埢一浀焂湫塓亍凘縟殳，堈屮柁脞娷葽乜瘖亓夗。聈一昳秶棓葀乇嫕糑丏，烶丌卼梠殔裷乇蒴丱宁。頇狉攷艖嵬擐忔一惎硉浡泹丼柀丌，瑗愓乜呥哃裺抰卌乇杬馻疪丏狔。詎狜犵幯羦餟阤一棐閈挳侄圢衱乇，溳聏丌穸耷塥祊匜兀侚搿恛仂弨。郫一洊梫婼搘亍翥曀丮，翍兀胈谻硭詶屮愻冇仚。眭一峟崥傇蜋屮蒹膷殳，淍丌垟秺堻毸乇僔夬屴。萓厔伎錝榃錵汊一愅笣迼怐宄衎屮，楎揯丌怜郈揫枍夗亍杺蜪咥丮昑。陫一咶粖湋暋乇戩鞔勼，悷乜柋偰湕痵兀廕仂氿。焀一弇偊湢葠丌墏磡冘，梩亍柭埏堍蜁乜睼爿仝。
                  埣一枹蚺絑輇乜雿褼仉，殑乜洼梌猦蓱亍槔尐犮。絔怓阢樻鄍縎甪一匒袶悀怮肊姼屮，絻鈃乇芠砉僉狋匜屮怙馺拺仉抩。頇肣朻蕆搣螐汋一喵翐茥昑宁狊屮，嗋棩兀岪珌暐祂宁乇彾摳苪丱抩。尐迾泔脙峉麡嵷塎阣尥昦囧泞昍岉楥乇泞墂稗。离一苾梑硰塙亍馝糒卬，谹屮峟訬軦痻兀踄亓仚。梪一姲脭筎裮乇蜸儑丱，埢乜咭笭嵂鄐亍嫬仈刉。圠眣炅啀柤雥葌廇汆妀胉疔咂杸町猼兀呬慱裚。硨沷犵疀輈璒扙一皒弸袗狉夗挎乇，鉎掰亍怚垘矠狒忉亍姃銩苠气妱。
                  袤一珃秷酤滍乇魡螁尐，啶亍扃晢聑綔乇墎殳宄。庲一徆梜揳腤乜滱閾爿，玈亍咰豽跜煓乇僤气帄。桾一苵眴揊雸丌搿鄳丮，眴屮挀蛁喓煔乇綣尐庀。犉孥伓膵嫈蕠扦一蛣唻牷肏屴枺屮，亄萏乜杬洘巰佫玊亍怴輐恇冇泍。烴一癹弶焨睔兀鄜遻仉，釳乇彖軡媓觤屮褆勼屴。婽妵犵璡歈瞛幵一睇崒蚙泐仝俉乜，雺酠乜佶赲煍沭戉亍昐蓏迡旡枃。跜帗阢嶯鉎瞚汜一觚啐桎岮仡迣兀，羦猰屮呦剉跫氝仡亍呫裻秖卬呯。茻呫伄駩骭燂网一崽离粅矸仡眊乇，瑏惄乇厔咥鄍矼卌屮坶綖炰仈芛。嵋侗忕麮輇螏价一菣桷荇剆阞俁亍，徯啽乜迖垕碇泬尒屮呡摍牮丱昉</p>
                  <p>猢炂氘瞗遒輵朳一嵋酖狺甾匜扂亍，腩掰亍枟侹溞抰氿丌泙緀柅丏佸。晻芤奻縋朡磟伓一猑掊笉囷扐欨兀，暆堙乇玢怷楎怚庂丌沴骱舡圠姁。奡衪朾嶬歁鋋孖一晲婌捀芚戉洑丌，絻湉乇怚珈瓽舠玊乇芶嗺挍厹泝。堀一胙脘絪嗄乜耤錩仂，婛亍俇敓堹閞乜漅丱仡。渜瓝朿橩睠駪朻一稌袑笐坢氕苴屮，歃菀乇朊郈煒舠阞丌呦嵾耔殳怞。寔匋牞澥歃錈朾一蛩离紌芴庂炴屮，稕棖兀佸浂葋盵汃亍杻牄釔气抳。詎妴扦橉豋蕆尥一堸莙烚枍屴俁亍，嫍愖亍狋袃碄抪玊乇怑鉾衲夬穻。
                  圠捀坽淠眃鸆睚詴仵邘姲汦迕泞体塕亍帔屣鉣。琖迓扠澿裱襁艼一椓釹珒彽帄砉屮，葐粨屮冞胙牏枟卌兀甾朅拺勼抾。婘一峛珺硠溛乜殟鮐仉，惛屮洝啅竤雸兀嫫仈刌。仂袘枃酓峗襺楗輅艼朳珃芊冾怳扻艄乜坰撦鉣。尐倇坰秶苶鷾瓿筸仱汒眊忮炔呬甹滏兀姃滮豊。崣一柷笭嵋碏兀窫鴔丱，訞兀苲徟湋甝丌漷巿肊。旡倞妵脝牳靃葔鈮伬伎峖扴杬穸忡媸亍枅踄睙。
                  埢一浀焂湫塓亍凘縟殳，堈屮柁脞娷葽乜瘖亓夗。聈一昳秶棓葀乇嫕糑丏，烶丌卼梠殔裷乇蒴丱宁。頇狉攷艖嵬擐忔一惎硉浡泹丼柀丌，瑗愓乜呥哃裺抰卌乇杬馻疪丏狔。詎狜犵幯羦餟阤一棐閈挳侄圢衱乇，溳聏丌穸耷塥祊匜兀侚搿恛仂弨。郫一洊梫婼搘亍翥曀丮，翍兀胈谻硭詶屮愻冇仚。眭一峟崥傇蜋屮蒹膷殳，淍丌垟秺堻毸乇僔夬屴。萓厔伎錝榃錵汊一愅笣迼怐宄衎屮，楎揯丌怜郈揫枍夗亍杺蜪咥丮昑。陫一咶粖湋暋乇戩鞔勼，悷乜柋偰湕痵兀廕仂氿。焀一弇偊湢葠丌墏磡冘，梩亍柭埏堍蜁乜睼爿仝。
                  埣一枹蚺絑輇乜雿褼仉，殑乜洼梌猦蓱亍槔尐犮。絔怓阢樻鄍縎甪一匒袶悀怮肊姼屮，絻鈃乇芠砉僉狋匜屮怙馺拺仉抩。頇肣朻蕆搣螐汋一喵翐茥昑宁狊屮，嗋棩兀岪珌暐祂宁乇彾摳苪丱抩。尐迾泔脙峉麡嵷塎阣尥昦囧泞昍岉楥乇泞墂稗。离一苾梑硰塙亍馝糒卬，谹屮峟訬軦痻兀踄亓仚。梪一姲脭筎裮乇蜸儑丱，埢乜咭笭嵂鄐亍嫬仈刉。圠眣炅啀柤雥葌廇汆妀胉疔咂杸町猼兀呬慱裚。硨沷犵疀輈璒扙一皒弸袗狉夗挎乇，鉎掰亍怚垘矠狒忉亍姃銩苠气妱。
                  袤一珃秷酤滍乇魡螁尐，啶亍扃晢聑綔乇墎殳宄。庲一徆梜揳腤乜滱閾爿，玈亍咰豽跜煓乇僤气帄。桾一苵眴揊雸丌搿鄳丮，眴屮挀蛁喓煔乇綣尐庀。犉孥伓膵嫈蕠扦一蛣唻牷肏屴枺屮，亄萏乜杬洘巰佫玊亍怴輐恇冇泍。烴一癹弶焨睔兀鄜遻仉，釳乇彖軡媓觤屮褆勼屴。婽妵犵璡歈瞛幵一睇崒蚙泐仝俉乜，雺酠乜佶赲煍沭戉亍昐蓏迡旡枃。跜帗阢嶯鉎瞚汜一觚啐桎岮仡迣兀，羦猰屮呦剉跫氝仡亍呫裻秖卬呯。茻呫伄駩骭燂网一崽离粅矸仡眊乇，瑏惄乇厔咥鄍矼卌屮坶綖炰仈芛。嵋侗忕麮輇螏价一菣桷荇剆阞俁亍，徯啽乜迖垕碇泬尒屮呡摍牮丱昉</p>
              </el-scrollbar>
          </el-col>
          <el-col :span=7 :class="[isClick ? [isComment ? 'commentIn' : 'commentOut'] : '','comment_area']">
              <div class="post-comment">
                <el-form ref="form" :model="form">
                    <el-form-item>
                    <el-input type="textarea" v-model="form.desc" resize="none" rows=4></el-input>
                    </el-form-item>
                    <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交评论</el-button>
                </el-form-item>
                </el-form>
              </div>
              <div class="comment_show">
                <el-scrollbar style="height: 100%;">
                  <div class="each-comment">
                      <el-row>
                          <el-col :span=4>
                              <div class="user-img">
                                  <img src="../../assets/svg/ruby.svg" alt="">
                              </div>
                          </el-col>
                          <el-col :span=20>
                              <p>Jetty Smith</p>
                              <small>Update at 2018/8/3</small>
                              <p>你知道你在说什么吗，这是一段假文字你知道你在说什么吗，这是一段假文字你知道你在说什么吗，这是一段假文字你知道你在说什么吗，这是一段假文字</p>
                          </el-col>
                      </el-row>
                  </div>
                  <div class="each-comment">
                      <el-row>
                          <el-col :span=4>
                              <div class="user-img">
                                  <img src="../../assets/svg/ruby.svg" alt="">
                              </div>
                          </el-col>
                          <el-col :span=20>
                              <p>Jetty Smith</p>
                              <small>Update at 2018/8/3</small>
                              <p>你知道你在说什么吗，这是一段假文字你知道你在说什么吗，这是一段假文字你知道你在说什么吗，这是一段假文字你知道你在说什么吗，这是一段假文字</p>
                          </el-col>
                      </el-row>
                  </div>
                  <div class="each-comment">
                      <el-row>
                          <el-col :span=4>
                              <div class="user-img">
                                  <img src="../../assets/svg/ruby.svg" alt="">
                              </div>
                          </el-col>
                          <el-col :span=20>
                              <p>Jetty Smith</p>
                              <small>Update at 2018/8/3</small>
                              <p>你知道你在说什么吗，这是一段假文字你知道你在说什么吗，这是一段假文字你知道你在说什么吗，这是一段假文字你知道你在说什么吗，这是一段假文字</p>
                          </el-col>
                      </el-row>
                  </div>
                  <div class="each-comment">
                      <el-row>
                          <el-col :span=4>
                              <div class="user-img">
                                  <img src="../../assets/svg/ruby.svg" alt="">
                              </div>
                          </el-col>
                          <el-col :span=20>
                              <p>Jetty Smith</p>
                              <small>Update at 2018/8/3</small>
                              <p>你知道你在说什么吗，这是一段假文字你知道你在说什么吗，这是一段假文字你知道你在说什么吗，这是一段假文字你知道你在说什么吗，这是一段假文字</p>
                          </el-col>
                      </el-row>
                  </div>
                  <div class="each-comment">
                      <el-row>
                          <el-col :span=4>
                              <div class="user-img">
                                  <img src="../../assets/svg/ruby.svg" alt="">
                              </div>
                          </el-col>
                          <el-col :span=20>
                              <p>Jetty Smith</p>
                              <small>Update at 2018/8/3</small>
                              <p>你知道你在说什么吗，这是一段假文字你知道你在说什么吗，这是一段假文字你知道你在说什么吗，这是一段假文字你知道你在说什么吗，这是一段假文字</p>
                          </el-col>
                      </el-row>
                  </div>
                </el-scrollbar>
              </div>
          </el-col>
      </el-row>
      <el-menu class="el-menu-vertical-demo" default-active="1-1" :collapse="isCollapse" v-bind:style="{'display':isCollapse ? 'none':'block'}" collapse-transition=false>
        <el-scrollbar style="height: calc(100vh - 66px);">
            <el-submenu index="1">
                <template slot="title">
                    <!-- <i class="el-icon-menu"></i> -->
                    <span>内容列表目录</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">最近三天内有更新</template>
                    <el-menu-item index="1-1">Pre reading guide</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-scrollbar>
      </el-menu>
  </el-dialog>
</template>
<script>
export default {
  name: 'Dialog-5',
  props: {
    dialogPostVisible: {
      type: Boolean
    }
  },
  data () {
    return {
      isClick: false,
      isComment: false,
      isCollapse: true,
      form: {}
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.el-row,.el-col{
    height: 100%;
    position: relative;
}
.left-list{
    position:absolute;
    padding: 15px 20px;
    left: -20px;
    top: -15px;
    background-color: #3c96f3;
    color: #fff;
    box-shadow: 0 0 5px #868686;
    border-top-right-radius: 5px;
    cursor: pointer;
    z-index: 99;
}
.left-list:hover{
    color: #3c96f3;
    background-color: #fff;
}
.el-menu-vertical-demo:not(.el-menu--collapse){
    position: absolute;
    width: 300px;
    top: 0;
    left: 0;
    height: 100%;
    box-shadow: 1px 1px 5px #a6a6a6;
    border-right: 0;
    padding: 30px 20px 30px 50px;
    animation: menuIn .5s linear forwards;
}
.post-title{
    font-size: 36px;
    bottom: 15%;
    color: #3c96f3;
}
.post-author{
    bottom: 5%;
    font-size: 18px;
    color: #868686;
    font-weight: bolder;
    text-transform: uppercase;
}
.post-title,.post-author{
    text-align: right;
    position: absolute;
    right: 10px;
}
.comment_area{
    right: -390px;
    position: absolute;
    top: 0;
    background-color: #fff;
    box-shadow: -1px 0 5px #a6a6a6;
    padding: 10px 0;
    z-index: 9;
    height: calc(100% + 43px);
}
.post-comment{
    transform: translate(0,10px);
    margin-left: 3%;
    width: 94%;
}
.comment_show{
    margin-left: 2%;
    width: 96%;
    transform: translate(0,16px);
    height: calc(100% - 166px);
}
.user-img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #666;
    text-align: center;
    line-height: 45px;
}
.user-img img{
    width: 50%;
}
.each-comment{
    margin-bottom: 16px;
}
.comment-icon{
    color: #3c96f3;
    cursor: pointer;
}
.commentIn{
    animation: commentIn .3s linear forwards;
}
.commentOut{
    animation: commentOut .3s linear forwards;
}
@keyframes commentIn{
    0%{
        right: -390px;
    }
    100%{
        right: -7px;
    }
}
@keyframes commentOut{
    0%{
        right: -7px;
    }
    100%{
        right: -390px;
    }
}
@keyframes menuIn {
    0%{
        left: -350px;
    }
    100%{
        left: 0;
    }
}
</style>
<style>
.dialog-post.is-fullscreen{
    height: 96%;
    position: relative;
    overflow: hidden;
}
.dialog-post .el-menu--collapse{
    display: none !important;
    z-index: -1;
    border: 0;
}
.dialog-post .el-submenu .el-menu-item{
    height: 35px;
    line-height: 35px;
    font-size: 15px;
}
.dialog-post .el-submenu .el-menu-item:focus,.dialog-post .el-menu-item.is-active{
    color: #3c96f3;
}
.dialog-post .el-menu-item-group__title,.dialog-post .el-submenu .el-menu-item{
    padding-left: 30px !important;
}
.dialog-post .el-scrollbar__wrap{
    margin-right: -18px !important;
    padding-left: 10px;
}
.dialog-post .el-form-item--mini.el-form-item, .dialog-post .el-form-item--small.el-form-item{
    margin-bottom: 4px;
}
.dialog-post .el-button--small, .dialog-post .el-button--small.is-round{
    width: 100%;
    background-color: #3c96f3;
    border-color: #fff;
}
.dialog-post .el-button:focus, .dialog-post .el-button:hover{
    background-color: #fff;
    color: #3c96f3;
    border-color: #3c96f3;
}
.dialog-post textarea{
    font-family: inherit;
}
</style>
