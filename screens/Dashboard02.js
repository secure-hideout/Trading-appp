import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

//const currentValue="$2359" 
const Dashboard02 = () => {
  return (
    <View style={styles.dashboard02}>
      <Text style={[styles.currentPortfolioValue, styles.textPosition]}>
        Current Portfolio Value
      </Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={styles.arrowLongSquareUp} />
        <Text style={[styles.text, styles.textPosition]}>
          <Text style={styles.text1}>$23,500</Text>
          <Text style={styles.text2}>.49</Text>
        </Text>
      </View>
      <View style={[styles.parent, styles.parentPosition1]}>
        <Text style={[styles.text3, styles.ytdTypo]}>+5.9%</Text>
        <Image
          style={[styles.frameIcon, styles.frameIconPosition]}
          source={require("../assets/frame.svg")}
        />
      </View>
      <View style={styles.myWatchlistParent}>
        <Text style={[styles.myWatchlist, styles.myWatchlistTypo]}>
          My Watchlist
        </Text>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <Text style={[styles.ytd, styles.ytdClr]}>YTD</Text>
        <View style={styles.groupInner} />
        <Text style={[styles.mtd, styles.ytdTypo]}>MTD</Text>
        <View style={[styles.rectangleGroup, styles.groupLayout1]}>
          <View style={[styles.rectangleView, styles.groupChildPosition1]} />
          <View style={[styles.ellipseView, styles.groupLayout]} />
          <Image
            style={styles.bitcoinSvgrepoCom1Icon}
            source={require("../assets/bitcoinsvgrepocom-1.svg")}
          />
          <Text style={[styles.bitcoinBtc, styles.bitcoinFlexBox]}>
            <Text style={styles.bitcoinBtcTxt}>
              <Text>
                <Text style={styles.bitcoin}>
                  <Text style={styles.bitcoin1}>Bitcoin</Text>
                </Text>
              </Text>
              <Text style={[styles.btc, styles.ytdTypo]}>BTC</Text>
            </Text>
          </Text>
          <Text style={styles.text4}>
            <Text style={styles.text1}>$30,618.</Text>
            <Text style={styles.text6}>60</Text>
          </Text>
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <View style={[styles.group, styles.groupPosition]}>
            <Text style={[styles.text7, styles.textTypo1]}>-7.90%</Text>
            <Image
              style={[styles.frameIcon1, styles.frameIconPosition]}
              source={require("../assets/frame1.svg")}
            />
          </View>
        </View>
        <View style={[styles.rectangleContainer, styles.groupLayout1]}>
          <View style={[styles.groupChild2, styles.groupChildPosition1]} />
          <View style={[styles.ellipseView, styles.groupLayout]} />
          <Image
            style={[styles.ethereumSvgrepoCom1Icon, styles.ethereumIconLayout]}
            source={require("../assets/ethereumsvgrepocom-1.svg")}
          />
          <Text style={[styles.bitcoinBtc, styles.bitcoinFlexBox]}>
            <Text style={styles.bitcoinBtcTxt}>
              <Text>
                <Text style={styles.bitcoin}>
                  <Text style={styles.bitcoin1}>Ethereum</Text>
                </Text>
              </Text>
              <Text style={[styles.btc, styles.ytdTypo]}>ETH</Text>
            </Text>
          </Text>
          <Text style={styles.text4}>
            <Text style={styles.text1}>$1,882.</Text>
            <Text style={styles.text6}>43</Text>
          </Text>
          <View style={[styles.groupChild4, styles.groupChildLayout]} />
          <View style={[styles.container, styles.groupPosition]}>
            <Text style={[styles.text11, styles.textTypo1]}>+3.97%</Text>
            <Image
              style={[styles.frameIcon2, styles.frameIconPosition]}
              source={require("../assets/frame2.svg")}
            />
          </View>
        </View>
      </View>
      <View style={styles.dashboard02Child} />
      <Text style={[styles.cryptoAssets, styles.myWatchlistTypo]}>
        Crypto Assets
      </Text>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={[styles.groupChild5, styles.groupParentLayout]} />
        <View style={[styles.groupChild6, styles.framePosition]} />
        <Text style={[styles.bitcoinBtc1, styles.framePosition]}>
          <Text style={styles.bitcoinBtcTxt}>
            <Text>
              <Text style={styles.bitcoin}>
                <Text style={styles.bitcoin1}>Bitcoin</Text>
              </Text>
            </Text>
            <Text style={[styles.btc, styles.ytdTypo]}>BTC</Text>
          </Text>
        </Text>
        <Text style={[styles.text12, styles.textTypo]}>
          <Text style={styles.text1}>$30,618.</Text>
          <Text style={styles.text6}>60</Text>
        </Text>
        <View style={[styles.groupChild7, styles.groupChildPosition]} />
        <View style={[styles.parent1, styles.parentPosition]}>
          <Text style={[styles.text7, styles.textTypo1]}>-7.90%</Text>
          <Image
            style={[styles.frameIcon1, styles.frameIconPosition]}
            source={require("../assets/frame1.svg")}
          />
        </View>
      </View>
      <Pressable style={[styles.dashboard02Item, styles.groupChildLayout]} />
      <Text style={[styles.seeAll, styles.ytdClr]}>See All</Text>
      <Image
        style={[styles.bitcoin1Icon, styles.groupItemLayout]}
        source={require("../assets/bitcoin-1.svg")}
      />
      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <View style={[styles.groupChild5, styles.groupParentLayout]} />
        <View style={[styles.groupChild6, styles.framePosition]} />
        <Image
          style={[styles.ethereumSvgrepoCom1Icon1, styles.ethereumIconLayout]}
          source={require("../assets/ethereumsvgrepocom-1.svg")}
        />
        <Text style={[styles.bitcoinBtc1, styles.framePosition]}>
          <Text style={styles.bitcoinBtcTxt}>
            <Text>
              <Text style={styles.bitcoin}>
                <Text style={styles.bitcoin1}>Ethereum</Text>
              </Text>
            </Text>
            <Text style={[styles.btc, styles.ytdTypo]}>ETH</Text>
          </Text>
        </Text>
        <Text style={[styles.text16, styles.textTypo]}>
          <Text style={styles.text1}>$1882.</Text>
          <Text style={styles.text6}>43</Text>
        </Text>
        <View style={[styles.groupChild10, styles.groupChildPosition]} />
        <View style={[styles.parent2, styles.parentPosition]}>
          <Text style={[styles.text11, styles.textTypo1]}>+3.97%</Text>
          <Image
            style={[styles.frameIcon2, styles.frameIconPosition]}
            source={require("../assets/frame2.svg")}
          />
        </View>
      </View>
      <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
        <View style={[styles.groupChild5, styles.groupParentLayout]} />
        <View style={[styles.groupChild6, styles.framePosition]} />
        <Image
          style={[styles.rippleSvgrepoCom1Icon, styles.iconLayout]}
          source={require("../assets/ripplesvgrepocom-1.svg")}
        />
        <Text style={[styles.bitcoinBtc1, styles.framePosition]}>
          <Text style={styles.bitcoinBtcTxt}>
            <Text>
              <Text style={styles.bitcoin}>
                <Text style={styles.bitcoin1}>Ripple</Text>
              </Text>
            </Text>
            <Text style={[styles.btc, styles.ytdTypo]}>XRP</Text>
          </Text>
        </Text>
        <Text style={[styles.text20, styles.textTypo]}>
          <Text style={styles.text1}>$0.</Text>
          <Text style={styles.text6}>48</Text>
        </Text>
        <View style={[styles.groupChild10, styles.groupChildPosition]} />
        <View style={[styles.parent2, styles.parentPosition]}>
          <Text style={[styles.text11, styles.textTypo1]}>+0.00%</Text>
          <Image
            style={[styles.frameIcon2, styles.frameIconPosition]}
            source={require("../assets/frame2.svg")}
          />
        </View>
      </View>
      <View style={[styles.rectangleParent3, styles.groupParentLayout]}>
        <View style={[styles.groupChild5, styles.groupParentLayout]} />
        <View style={[styles.groupChild6, styles.framePosition]} />
        <Image
          style={styles.litecoin1Icon}
          source={require("../assets/litecoin-1.svg")}
        />
        <Text style={[styles.bitcoinBtc1, styles.framePosition]}>
          <Text style={styles.bitcoinBtcTxt}>
            <Text>
              <Text style={styles.bitcoin}>
                <Text style={styles.bitcoin1}>Litecoin</Text>
              </Text>
            </Text>
            <Text style={[styles.btc, styles.ytdTypo]}>LTC</Text>
          </Text>
        </Text>
        <Text style={[styles.text24, styles.textTypo]}>
          <Text style={styles.text1}>$97.</Text>
          <Text style={styles.text6}>41</Text>
        </Text>
        <View style={[styles.groupChild7, styles.groupChildPosition]} />
        <View style={[styles.parent1, styles.parentPosition]}>
          <Text style={[styles.text7, styles.textTypo1]}>-7.90%</Text>
          <Image
            style={[styles.frameIcon1, styles.frameIconPosition]}
            source={require("../assets/frame1.svg")}
          />
        </View>
      </View>
      <View style={[styles.rectangleParent4, styles.groupParentLayout]}>
        <View style={[styles.groupChild5, styles.groupParentLayout]} />
        <View style={[styles.groupChild6, styles.framePosition]} />
        <Image
          style={[styles.ethereumSvgrepoCom1Icon1, styles.ethereumIconLayout]}
          source={require("../assets/usdt-1.svg")}
        />
        <Text style={[styles.bitcoinBtc1, styles.framePosition]}>
          <Text style={styles.bitcoinBtcTxt}>
            <Text>
              <Text style={styles.bitcoin}>
                <Text style={styles.bitcoin1}>Tether</Text>
              </Text>
            </Text>
            <Text style={[styles.btc, styles.ytdTypo]}>USDT</Text>
          </Text>
        </Text>
        <Text style={[styles.text28, styles.textTypo]}>
          <Text style={styles.text1}>$1.</Text>
          <Text style={styles.text6}>00</Text>
        </Text>
        <View style={[styles.groupChild7, styles.groupChildPosition]} />
        <View style={[styles.parent5, styles.parentPosition]}>
          <Text style={[styles.text31, styles.textTypo1]}>-0.90%</Text>
          <Image
            style={[styles.frameIcon7, styles.frameIconPosition]}
            source={require("../assets/frame1.svg")}
          />
        </View>
      </View>
      <View style={[styles.rectangleParent5, styles.groupParentLayout]}>
        <View style={[styles.groupChild5, styles.groupParentLayout]} />
        <View style={[styles.groupChild6, styles.framePosition]} />
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/3265299-1.png")}
        />
        <Text style={[styles.bitcoinBtc1, styles.framePosition]}>
          <Text style={styles.bitcoinBtcTxt}>
            <Text>
              <Text style={styles.bitcoin}>
                <Text style={styles.bitcoin1}>Dogecoin</Text>
              </Text>
            </Text>
            <Text style={[styles.btc, styles.ytdTypo]}>DOGE</Text>
          </Text>
        </Text>
        <Text style={[styles.text32, styles.textTypo]}>
          <Text style={styles.text1}>$0.</Text>
          <Text style={styles.text6}>065</Text>
        </Text>
        <View style={[styles.groupChild10, styles.groupChildPosition]} />
        <View style={[styles.parent2, styles.parentPosition]}>
          <Text style={[styles.text11, styles.textTypo1]}>+0.90%</Text>
          <Image
            style={[styles.frameIcon2, styles.frameIconPosition]}
            source={require("../assets/frame2.svg")}
          />
        </View>
      </View>
      <View style={[styles.rectangleParent6, styles.groupChild23Position]}>
        <View style={[styles.groupChild23, styles.groupChild23Position]} />
        <View style={[styles.frame, styles.framePosition]} />
      </View>
      <View style={[styles.dashboard02Inner, styles.dashboard02Layout]} />
      <Text style={[styles.deposit, styles.textPosition]}>Deposit</Text>
      <View style={[styles.dashboard02Child1, styles.dashboard02ChildLayout]} />
      <Image
        style={[styles.frameIcon9, styles.frameIconLayout]}
        source={require("../assets/frame3.svg")}
      />
      <View style={[styles.dashboard02Child2, styles.dashboard02Layout]} />
      <View style={[styles.dashboard02Child3, styles.dashboard02ChildLayout]} />
      <View style={[styles.dashboard02Child4, styles.iconLayout]} />
      <View style={styles.dashboard02Child5} />
      <Text style={[styles.withdraw, styles.textPosition]}>Withdraw</Text>
      <Image
        style={[styles.frameIcon10, styles.frameIconLayout]}
        source={require("../assets/frame4.svg")}
      />
      <View style={[styles.iosStatusBar, styles.navLayout]}>
        <View style={[styles.statusBar, styles.borderBorder]} />
        <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        <View style={[styles.battery, styles.timePosition]}>
          <View style={[styles.border, styles.timePosition]} />
          <Image
            style={[styles.capIcon, styles.timePosition]}
            source={require("../assets/cap.svg")}
          />
          <View style={[styles.capacity, styles.timePosition]} />
        </View>
        <Image style={styles.wifiIcon} source={require("../assets/wifi.svg")} />
        <Image
          style={styles.cellularConnectionIcon}
          source={require("../assets/cellular-connection.svg")}
        />
      </View>
      <View style={[styles.nav, styles.navLayout]}>
        <View style={[styles.navChild, styles.navLayout]} />
        <Text style={[styles.welcomeSatyam, styles.textPosition]}>
          <Text style={styles.welcome}>{`Welcome `}</Text>
          <Text style={styles.satyam}>Satyam</Text>
          <Text style={styles.text36}>,</Text>
        </Text>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupPosition]}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <Image
          style={[styles.maskGroupIcon1, styles.maskGroupPosition]}
          source={require("../assets/mask-group1.svg")}
        />
      </View>
      <Image
        style={[styles.maskGroupIcon2, styles.groupLayout]}
        source={require("../assets/mask-group2.svg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  parentPosition1: {
    left: "50%",
    position: "absolute",
  },
  ytdTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.sFProDisplay,
  },
  frameIconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  myWatchlistTypo: {
    width: 128,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.sFProDisplay,
    fontSize: FontSize.size_base,
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  groupItemLayout: {
    height: 20,
    position: "absolute",
  },
  ytdClr: {
    color: Color.white,
    textAlign: "center",
  },
  groupLayout1: {
    height: 90,
    width: 166,
    position: "absolute",
  },
  groupChildPosition1: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  groupLayout: {
    width: 30,
    height: 30,
  },
  bitcoinFlexBox: {
    width: 82,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  groupChildLayout: {
    width: 50,
    height: 20,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  groupPosition: {
    height: 19,
    top: 62,
    left: "50%",
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_5xs,
    top: 5,
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  ethereumIconLayout: {
    height: 16,
    width: 16,
    left: 15,
    position: "absolute",
    overflow: "hidden",
  },
  groupParentLayout: {
    height: 50,
    width: 343,
    position: "absolute",
  },
  framePosition: {
    top: 10,
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    top: 16,
    letterSpacing: -0.3,
    fontWeight: "700",
    fontFamily: FontFamily.sFProDisplay,
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  groupChildPosition: {
    left: 285,
    top: 15,
    width: 50,
    height: 20,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  parentPosition: {
    marginLeft: 114.5,
    top: 15,
    height: 19,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 14,
    position: "absolute",
  },
  groupChild23Position: {
    height: 25,
    marginLeft: -187.5,
    width: 375,
    left: "50%",
    position: "absolute",
  },
  dashboard02Layout: {
    height: 48,
    top: 175,
    width: 166,
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  dashboard02ChildLayout: {
    height: 40,
    width: 40,
    backgroundColor: Color.cornflowerblue,
    top: 179,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  frameIconLayout: {
    bottom: "74.01%",
    top: "23.03%",
    width: "6.4%",
    height: "2.96%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  navLayout: {
    height: 44,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  maskGroupPosition: {
    top: 7,
    width: 30,
    height: 30,
    position: "absolute",
  },
  currentPortfolioValue: {
    top: 100,
    color: Color.darkgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    marginLeft: -171.5,
  },
  groupChild: {
    left: 186,
    width: 60,
    height: 30,
    backgroundColor: Color.peachpuff,
    borderRadius: Border.br_81xl,
    top: 4,
    position: "absolute",
  },
  arrowLongSquareUp: {
    height: "63.16%",
    width: "9.2%",
    top: "23.68%",
    right: "0%",
    bottom: "13.16%",
    left: "90.8%",
    position: "absolute",
  },
  text1: {
    color: Color.gray_100,
  },
  text2: {
    color: Color.darkgray,
  },
  text: {
    marginLeft: -130.5,
    fontSize: 32,
    fontWeight: "700",
    top: 0,
    fontFamily: FontFamily.sFProDisplay,
  },
  rectangleParent: {
    top: 121,
    width: 261,
    height: 38,
    left: 16,
    position: "absolute",
  },
  text3: {
    top: 5,
    fontSize: FontSize.size_3xs,
    marginLeft: -5,
    color: Color.gray_100,
    textAlign: "left",
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  frameIcon: {
    width: "45.53%",
    right: "54.47%",
  },
  parent: {
    marginLeft: 17.5,
    top: 129,
    width: 48,
    height: 22,
  },
  myWatchlist: {
    top: 0,
    color: Color.darkgray,
    fontWeight: "500",
  },
  groupItem: {
    width: 34,
    height: 20,
    backgroundColor: Color.gray_100,
    left: 309,
    top: 0,
    borderRadius: Border.br_81xl,
  },
  ytd: {
    marginLeft: 144.5,
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.sFProDisplay,
    top: 4,
    left: "50%",
    position: "absolute",
  },
  groupInner: {
    left: 271,
    backgroundColor: Color.whitesmoke,
    height: 20,
    width: 34,
    top: 0,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  mtd: {
    marginLeft: 105.5,
    textAlign: "center",
    fontWeight: "600",
    color: Color.gray_100,
    top: 4,
    fontSize: FontSize.size_3xs,
    left: "50%",
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: "#c1c2eb",
    height: 90,
    width: 166,
    position: "absolute",
  },
  ellipseView: {
    backgroundColor: Color.gray_200,
    top: 8,
    left: "50%",
    position: "absolute",
    marginLeft: -75,
    width: 30,
  },
  bitcoinSvgrepoCom1Icon: {
    top: 13,
    left: 13,
    width: 21,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  bitcoin1: {
    fontSize: FontSize.size_smi,
  },
  bitcoin: {
    fontWeight: "600",
    color: Color.gray_100,
    fontFamily: FontFamily.sFProDisplay,
  },
  btc: {
    color: Color.gray_500,
    fontWeight: "500",
  },
  bitcoinBtcTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  bitcoinBtc: {
    marginLeft: -37,
    top: 8,
    left: "50%",
    position: "absolute",
  },
  text6: {
    color: Color.gray_500,
  },
  text4: {
    letterSpacing: -0.3,
    top: 62,
    marginLeft: -75,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.sFProDisplay,
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  groupChild1: {
    left: 97,
    backgroundColor: Color.gray_300,
    width: 50,
    top: 62,
  },
  text7: {
    marginLeft: -4.5,
  },
  frameIcon1: {
    width: "44.47%",
    right: "55.53%",
  },
  group: {
    marginLeft: 15,
    width: 43,
  },
  rectangleGroup: {
    left: 0,
    top: 31,
    width: 166,
  },
  groupChild2: {
    backgroundColor: Color.powderblue,
    height: 90,
    width: 166,
    position: "absolute",
  },
  ethereumSvgrepoCom1Icon: {
    top: 15,
    height: 16,
    width: 16,
    left: 15,
  },
  groupChild4: {
    left: 88,
    backgroundColor: Color.gray_300,
    width: 50,
    top: 62,
  },
  text11: {
    marginLeft: -5.5,
  },
  frameIcon2: {
    width: "42.5%",
    right: "57.5%",
  },
  container: {
    marginLeft: 6,
    width: 45,
  },
  rectangleContainer: {
    left: 177,
    top: 31,
    width: 166,
  },
  myWatchlistParent: {
    top: 239,
    height: 121,
    width: 343,
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  dashboard02Child: {
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    height: 436,
    width: 375,
    backgroundColor: Color.aliceblue,
    top: 376,
    left: 0,
    position: "absolute",
  },
  cryptoAssets: {
    top: 406,
    color: Color.gray_100,
    fontWeight: "700",
  },
  groupChild5: {
    backgroundColor: Color.gray_400,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  groupChild6: {
    marginLeft: -163.5,
    backgroundColor: Color.aliceblue,
    width: 30,
    height: 30,
  },
  bitcoinBtc1: {
    marginLeft: -125.5,
    width: 82,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  text12: {
    marginLeft: 24.5,
  },
  groupChild7: {
    backgroundColor: Color.peachpuff,
    left: 285,
  },
  parent1: {
    width: 43,
  },
  groupView: {
    top: 437,
    left: 16,
  },
  dashboard02Item: {
    top: 405,
    backgroundColor: Color.gray_100,
    width: 50,
    left: 309,
  },
  seeAll: {
    marginLeft: 132.5,
    top: 409,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.sFProDisplay,
    left: "50%",
    position: "absolute",
  },
  bitcoin1Icon: {
    top: 452,
    left: 29,
    width: 20,
    overflow: "hidden",
  },
  ethereumSvgrepoCom1Icon1: {
    top: 17,
  },
  text16: {
    marginLeft: 38.5,
  },
  groupChild10: {
    backgroundColor: Color.powderblue,
  },
  parent2: {
    width: 45,
  },
  rectangleParent1: {
    top: 495,
    left: 16,
  },
  rippleSvgrepoCom1Icon: {
    width: 14,
    top: 18,
    height: 14,
    left: 16,
    overflow: "hidden",
  },
  text20: {
    marginLeft: 65.5,
  },
  rectangleParent2: {
    top: 553,
    left: 16,
  },
  litecoin1Icon: {
    top: 19,
    left: 17,
    width: 12,
    height: 12,
    position: "absolute",
    overflow: "hidden",
  },
  text24: {
    marginLeft: 60.5,
  },
  rectangleParent3: {
    top: 611,
    left: 16,
  },
  text28: {
    marginLeft: 67.5,
  },
  text31: {
    marginLeft: -5,
    fontSize: FontSize.size_5xs,
  },
  frameIcon7: {
    width: "43.46%",
    right: "56.54%",
  },
  parent5: {
    width: 44,
  },
  rectangleParent4: {
    top: 669,
    left: 16,
  },
  icon: {
    width: 14,
    top: 18,
    height: 14,
    left: 16,
  },
  text32: {
    marginLeft: 55.5,
  },
  rectangleParent5: {
    top: 727,
    left: 16,
  },
  groupChild23: {
    backgroundColor: Color.aliceblue,
    top: 0,
  },
  frame: {
    marginLeft: -59.5,
    width: 118,
    height: 5,
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_81xl,
    top: 10,
    overflow: "hidden",
  },
  rectangleParent6: {
    top: 787,
  },
  dashboard02Inner: {
    left: 16,
  },
  deposit: {
    marginLeft: -103.5,
    top: 190,
    color: Color.gray_100,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  dashboard02Child1: {
    left: 20,
  },
  frameIcon9: {
    right: "86.13%",
    left: "7.47%",
  },
  dashboard02Child2: {
    left: 193,
  },
  dashboard02Child3: {
    left: 315,
  },
  dashboard02Child4: {
    left: 163,
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    height: 14,
    top: 376,
    width: 50,
    backgroundColor: Color.white,
  },
  dashboard02Child5: {
    top: 381,
    left: 176,
    borderRadius: Border.br_base,
    height: 3,
    width: 24,
    backgroundColor: Color.gray_100,
    position: "absolute",
  },
  withdraw: {
    marginLeft: 36.5,
    top: 189,
    color: Color.gray_100,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  frameIcon10: {
    right: "7.47%",
    left: "86.13%",
  },
  statusBar: {
    borderColor: "#1c1e32",
    width: 414,
    height: 44,
    position: "absolute",
    left: 0,
    backgroundColor: Color.gray_100,
    top: 0,
  },
  time: {
    marginTop: -8,
    fontSize: 15,
    letterSpacing: 0,
    fontFamily: FontFamily.sFProText,
    width: 54,
    textAlign: "center",
    color: Color.white,
    fontWeight: "600",
    left: 16,
  },
  border: {
    marginTop: -5.67,
    right: 2,
    borderRadius: 3,
    borderColor: "#fff",
    width: 22,
    opacity: 0.35,
    height: 11,
    borderWidth: 1,
    borderStyle: "solid",
  },
  capIcon: {
    marginTop: -2,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    marginTop: -3.67,
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
    backgroundColor: Color.white,
  },
  battery: {
    marginTop: -4.67,
    right: 16,
    height: 11,
    width: 24,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  iosStatusBar: {
    marginLeft: -187.5,
    height: 44,
    width: 375,
    left: "50%",
    top: 0,
  },
  navChild: {
    marginLeft: -187.5,
    height: 44,
    width: 375,
    left: "50%",
    top: 0,
    backgroundColor: Color.white,
  },
  welcome: {
    fontWeight: "700",
    fontFamily: FontFamily.sFProDisplay,
  },
  satyam: {
    fontFamily: FontFamily.sFProDisplay,
  },
  text36: {
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "500",
  },
  welcomeSatyam: {
    marginLeft: -135.5,
    top: 14,
    fontSize: 14,
    color: Color.gray_100,
  },
  maskGroupIcon: {
    left: 16,
  },
  maskGroupIcon1: {
    left: 328,
  },
  nav: {
    top: 44,
    marginLeft: -187.5,
    height: 44,
    width: 375,
    left: "50%",
  },
  maskGroupIcon2: {
    top: 51,
    left: 294,
    position: "absolute",
  },
  dashboard02: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Dashboard02;
