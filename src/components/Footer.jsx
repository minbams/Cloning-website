import React from 'react'
import Char from '../assets/passendger-char.png'
import LogoBts from '../assets/logo-bts.png'
import Qr from '../assets/qr-ios.jpg'
import Appstore from '../assets/appstore-icon.png'
import Googleplay from '../assets/googleplay-icon.png'


function Footer() {
    return (
        <>
            <footer id="footer-yl">
                <div className="passenger-con">
                    <div className="passenger-wrap">
                        <div className="left">
                            <img src={Char} alt="bts the skytrain passenger statistics" />
                            <p id="statisticall">รายงานสถิติผู้โดยสารตั้งแต่ 03/06/2023 - 18/04/2024 จำนวน 13,043,820 เที่ยวคน</p>
                        </div>
                        <div className="right">
                            <label htmlFor="sitemap-all" className="t-1">ค้นหาเมนูเว็บไซต์</label>
                            <select name="sitemap-all">
                                <option disabled selected className="op-0">เลือกเมนู</option>
                                <optgroup label="เกี่ยวกับเรา" className="op-1">
                                    <option value="history" className="op-2">ประวัติความเป็นมา</option>
                                    <option value="vision" className="op-3">วิสัยทัศน์ ภารกิจ และค่านิยมร่วม</option>
                                    <option value="board" className="op-70">คณะกรรมการบริษัท</option>
                                    <option value="responsibility/" className="op-4">ความรับผิดชอบต่อสังคม</option>
                                </optgroup>
                                <optgroup label="ข้อมูลบัตรโดยสาร" className="op-5">
                                    <option value="ticket" className="op-6">บัตรโดยสารเที่ยวเดียว</option>
                                    <option value="routemap" className="op-7">เส้นทางและอัตราค่าโดยสาร</option>
                                </optgroup>
                                <optgroup label="บัตรแรบบิท" className="op-8">
                                    <option value="ticket-rabbit" className="op-9">บัตรแรบบิท</option>
                                    <option value="ticket-rabbit-trips" className="op-10">ข้อมูลการซื้อบัตรโดยสาร/การเติมเที่ยว</option>
                                    <option value="ticket-rabbit-guide" className="op-11">วิธีใช้บัตรผ่านประตูอัตโนมัติ</option>
                                </optgroup>
                                <optgroup label="บัตร EMV Contactless" className="op-62">
                                    <option value="ticket-emv" className="op-63">การใช้บัตร EMV</option>
                                    <option value="condition-emv" className="op-64">ประกาศเงื่อนไขการใช้ EMV</option>
                                </optgroup>
                                <optgroup label="เงื่อนไขการออกบัตร" className="op-12">
                                    <option value="condition-ticket-emv" className="op-14">ประกาศเงื่อนไขการใช้ EMV</option>
                                    <option value="condition-service" className="op-15">ประกาศเงื่อนไขการใช้สิทธิ์สวัสดิการแห่งรัฐ</option>
                                </optgroup>
                                <optgroup label="ข้อมูลการใช้บริการ" className="op-16">
                                    <option value="routemap" className="op-17">เส้นทางและอัตราค่าโดยสาร</option>
                                    <option value="areamap" className="op-18">แผนที่บริเวณสถานี</option>
                                    <option value="traintime-frequency" className="op-19">เวลาและความถี่การเดินรถ</option>
                                    <option value="parkandride" className="op-20">ที่จอดรถ</option>
                                    <option value="lostfound" className="op-21">วิธีการแจ้งทรัพย์สินสูญหาย พบทรัพย์สิน หรือรับคืนทรัพย์สิน</option>
                                    <option value="system" className="op-22">ประกาศและระเบียบข้อบังคับในการใช้บริการ</option>
                                </optgroup>
                                <optgroup label="ธุรกิจและพาณิชย์" className="op-23">
                                    <option value="business" className="op-24">ข้อมูล/ติดต่อสอบถาม</option>
                                    <option value="rabbit-type" className="op-25">บัตรแรบบิทประเภทต่าง ๆ</option>
                                    <option value="rabbit-promotions" className="op-26">โปรโมชันบัตรแรบบิท</option>
                                    <option value="rabbit-top-up" className="op-27">ร้านค้า/บริการ ที่สามารถใช้แรบบิทและจุดเติมเงิน</option>
                                    <option value="myrabbit-topup" className="op-28">My Rabbit</option>
                                </optgroup>
                                <optgroup label="E-Library" className="op-29">
                                    <option value="system-structuer" className="op-30">ระบบโครงสร้างและสถานี</option>
                                    <option value="system-smodel" className="op-31">ระบบรถไฟฟ้า</option>
                                    <option value="system-signal" className="op-32">ระบบอาณัติสัญญาณ</option>
                                    <option value="system-maintenance" className="op-33">ระบบซ่อมบำรุง</option>
                                    <option value="system-tickets" className="op-34">ระบบบัตรโดยสาร</option>
                                    <option value="system-security" className="op-35">ระบบความปลอดภัย</option>
                                    <option value="system-personnel" className="op-36">ระบบรักษาความปลอดภัย</option>
                                    <option value="system-annual" className="op-37">รายงานประจำปี</option>
                                </optgroup>
                                <optgroup label="ข้อแนะนำเพื่อความปลอดภัย" className="op-38">
                                    <option value="suggestion-01" className="op-39">ข้อแนะนำในการใช้ประตูอัตโนมัติ</option>
                                    <option value="suggestion-02" className="op-40">ข้อแนะนำในการใช้บันได บันไดเลื่อนและลิฟต์</option>
                                    <option value="suggestion-03" className="op-41">ข้อแนะนำในการนำจักรยานเข้าระบบรถไฟฟ้ามหานคร สายสีเหลือง/ชมพู</option>
                                    <option value="suggestion-04" className="op-42">ข้อปฏิบัติและข้อห้ามเมื่ออยู่ในระบบรถไฟฟ้ามหานคร สายสีเหลือง/ชมพู</option>
                                    <option value="suggestion-05" className="op-43">ข้อแนะนำเมื่อเกิดเพลิงไหม้ หรือเหตุฉุกเฉิน</option>
                                </optgroup>
                                <optgroup label="นโยบายการคุ้มครองข้อมูลส่วนบุคคล" className="op-44">
                                    <option value="customerpolicy" className="op-46">สำหรับลูกค้า</option>
                                    <option value="cookiespolicy" className="op-53">สำหรับการใช้คุกกี้</option>
                                    <option value="parkingpolicy" className="op-54">สำหรับลานจอดรถยนต์</option>
                                </optgroup>
                                <optgroup label="อื่น ๆ" className="op-57">
                                    <option value="news" className="op-58">ข่าวสารและกิจกรรม</option>
                                    <option value="promotion" className="op-59">โปรโมชัน</option>
                                    <option value="faq" className="op-60">คำถามที่พบบ่อย</option>
                                    <option value="contact" className="op-61">ติดต่อเรา</option>
                                    <option value="recruitment" className="op-65">ร่วมงานกับเรา</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="footer-top-con">
                    <div class="footer-top">
                        <div class="left">
                            <h3 class="t-2">รถไฟฟ้ามหานคร สายสีเหลือง</h3>
                            <ul class="menus-wrap">
                                <li class="a-1">เกี่ยวกับเรา</li>
                                <li class="a-2">รถไฟฟ้าที่เกี่ยวข้อง</li>
                                <li class="a-6">ข้อมูลบัตรโดยสาร</li>
                                <li class="a-15">โปรโมชัน</li>
                                <li class="a-16">การเติมเงินบัตรแรบบิท</li>
                                <li class="a-17">ติดต่อเรา</li>
                                <li class="a-18">เส้นทางและอัตราค่าโดยสาร</li>
                                <li id="angle-sitemap">Sitemap</li>
                                <li></li>
                            </ul>
                        </div>
                        <div class="right">
                            <h3 class="t-3">ดาวน์โหลดแอปพลิเคชัน THE SKYTRAINs ได้ที่</h3>
                            <div class="app-group">
                                <div class="left">
                                    <img src={LogoBts} alt="bts the skytrain the skytrain app download on app store and google play" />
                                </div>
                                <div class="right">
                                    <div class="s-left">
                                        <img src={Qr} />
                                    </div>
                                    <div class="s-right">
                                        <img src={Appstore} alt="on app store" />
                                        <img src={Googleplay} alt="on google play" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-under-con">
                    <div class="footer-under">
                        <div class="top">
                            <div class="left">
                                <p class="t-4">บริษัท อีสเทิร์น บางกอกโมโนเรล จำกัด</p>
                                <p class="t-5">
                                    เลขที่21 ซอยเฉยพ่วง ถนนวิภาวดี-รังสิต แขวงจอมพลเขตจตุจักร
                                    กรุงเทพมหานคร 10900 ประเทศไทย
                                </p>
                                <p class="t-6">เบอร์ติดต่อ: 0 2617 6111</p>
                            </div>
                            <div class="right">
                                <p class="t-8">เว็บไซต์นี้แสดงผลได้ดีใน Chrome(43) : Safari(9) : Firefox(16)</p>
                                <p class="t-9">รองรับระบบสำหรับผู้พิการทางสายตา</p>
                            </div>
                        </div>
                        <div class="copyright">
                            <p class="t-7">ขอสงวนสิทธิ์ 2566 บริษัท อีสเทิร์น บางกอกโมโนเรล จำกัด</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer