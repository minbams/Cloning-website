import React from 'react'
import Caryl from '../assets/caryl.png'

function Content() {
    return (
        <>
            <div class="container">
                <div class="main">
                    <div class="content-ylline">
                        <div class="content-left">
                            <div class="head">
                                <h1>รถไฟฟ้ามหานคร สายสีเหลือง</h1>
                            </div>
                            <div class="content">
                                <div class="sub-content">
                                    <div class="sub-hand">วิสัยทัศน์</div>
                                    <div class="details">
                                        เป็นผู้นำในการให้บริการระบบรถไฟฟ้าขนส่งมวลชนที่ดีที่สุด
                                    </div>
                                </div>
                                <div class="sub-content">
                                    <div class="sub-hand">ภารกิจ</div>
                                    <div class="details">
                                        มุ่งพัฒนาระบบ การดำเนินการ และบุคลากร ตลอดจนการบริหาร
                                        ทรัพยากรอย่างมีประสิทธิภาพ
                                        เพื่อให้บริการระบบรถไฟฟ้าขนส่งมวลชนเป็นระบบที่ทันสมัย รวดเร็ว
                                        ปลอดภัย มีประสิทธิภาพ และเชื่อถือได้
                                        โดยให้ผลตอบแทนที่เหมาะสมแก่ผู้ที่เกี่ยวข้องและสังคม
                                    </div>
                                </div>
                                <div class="sub-content">
                                    <div class="sub-hand">ค่านิยมร่วม</div>
                                    <div class="details">
                                        ยึดมั่นในบรรษัทภิบาล เชื่อมั่นในบุคลากร
                                        มุ่งมั่นสู่ความเป็นเลิศในการให้บริการ
                                        สร้างความพึงพอใจสูงสุดแก่ผู้โดยสาร
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content-right">
                            <div class="content-img">
                                <img src={Caryl} alt="car-yl" width="499" height="374.55" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content