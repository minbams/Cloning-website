import React, { useState } from 'react';
import Logo from '../assets/BEM.png';
import Arrow from '../assets/arrow-down-black.png';
import Globe from '../assets/Globe.png';
import { Link } from "react-router-dom";

const Nav = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    const toggleDropdownLang = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [dropdownState, setDropdownState] = useState({
        about: false,
        ticket: false,
        service: false,
        business: false
    });

    const toggleDropdown = (key) => {
        setDropdownState(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    const handleTitleHover = (text) => {
        setHoveredItem(text);
    };

    const handleTitleLeave = () => {
        setHoveredItem(null);
    };

    const navItems = [
        {
            text: 'เกี่ยวกับเรา', key: 'about', height: '250px', left: '501.5px', items: [
                'ประวัติความเป็นมา',
                'วิสัยทัศน์ ภารกิจ และค่านิยมร่วม',
                'คณะกรรมการบริษัท',
                'ความรับผิดชอบต่อสังคม',
                'นโยบายการคุ้มครองข้อมูลส่วนบุคคล'
            ]
        },
        {
            text: 'ข้อมูลบัตรโดยสาร', key: 'ticket', height: '220px', left: '609.734px', items: [
                'บัตรโดยสารเที่ยวเดียว',
                'บัตรแรบบิท',
                'บัตร EMV Contactless',
                'เงื่อนไขการออกบัตร'
            ]
        },
        {
            text: 'ข้อมูลการใช้บริการ', key: 'service', height: '290px', left: '759.469px', items: [
                'เส้นทางและอัตราค่าโดยสาร',
                'แผนที่บริเวณสถานี',
                'เวลาและความถี่การเดินรถ',
                'ที่จอดรถ',
                'วิธีการแจ้งทรัพย์สินสูญหาย',
                'ประกาศและระเบียบข้อบังคับในการใช้บริการ'
            ]
        },
        {
            text: 'ธุรกิจและบริการ', key: 'business', height: '250px', left: '915.156px', items: [
                'บัตรแรบบิทประเภทต่าง ๆ',
                'โปรโมชันบัตรแรบบิท',
                'ร้านค้า/บริการ ที่สามารถใช้แรบบิทและจุดเติมเงิน',
                'ข้อมูล/ติดต่อสอบถาม',
                'My Rabbit'
            ]
        }
    ];

    return (
        <header id="navbar-yl">
            <nav className="nav-top">
                <div id="nav-top-wrap">
                    <div className="left">
                        <Link to="/">หน้าแรก</Link>
                        <Link to="/">E-Library</Link>
                        <Link to="/">ข้อแนะนำเพื่อความปลอดภัย</Link>
                    </div>
                    <div className="mid"></div>
                    <div className="right">
                        <Link to="https://recruitment.bts.co.th/#/home" target="_blank">ร่วมงานกับเรา</Link>
                        <Link to="/">ติดต่อเรา</Link>
                        <div className="chng-lang">
                            <div className="btn-wrap" onClick={toggleDropdownLang}>
                                <img src={Globe} alt="bts the skytrain language thai english" />
                                <span>ภาษาไทย</span>
                                <img src={Arrow} alt="bts the skytrain language thai english" />
                            </div>
                            {isDropdownOpen && (
                                <ul className="dd" style={{
                                    display: 'block',
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    marginTop: 0,
                                    marginBottom: 0,
                                    overflow: 'hidden',
                                }}>
                                    <li className="dd-th">TH</li>
                                    <li className="dd-en">EN</li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="nav-under">
                <div className="logo"><Link to="/"><img src={Logo} alt="bts the skytrain logo EBM" /></Link></div>
                <ul className="nav-items">
                    {navItems.map(({ text, key, height, left, items }, index) => (
                        <li key={index} onMouseEnter={() => toggleDropdown(key)} onMouseLeave={() => toggleDropdown(key)}>
                            <span>{text}</span>
                            <img id="icon" src={Arrow} alt="bts the skytrain icon nav menu" />
                            {dropdownState[key] && (
                                <div className="navmenu-detail-wrap" style={{ height }}>
                                    <ul className="navmenu-item-detail" style={{ left }}>
                                        <li className="head">{text}</li>
                                        {items.map((item, index) => (
                                            <li key={index} className="link" onMouseEnter={() => handleTitleHover(item)} onMouseLeave={handleTitleLeave}><a>{item}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                    <li><span>ข่าวสารและกิจกรรม</span></li>
                    <li><span>โปรโมชัน</span></li>
                    <li><span>คำถามที่พบบ่อย</span></li>
                </ul>
                {hoveredItem && (
                    <div>
                        {hoveredItem === 'นโยบายการคุ้มครองข้อมูลส่วนบุคคล' && (
                            <div className="navmenu-subitem-detail-wrap" style={{ display: 'block', left: '900.5px' }}>
                                <ul className="navmenu-subitem-detail">
                                    <li><a>สำหรับลูกค้า</a></li>
                                    <li><a>สำหรับการใช้คุกกี้</a></li>
                                    <li><a>สำหรับลานจอดรถยนต์</a></li>
                                </ul>
                            </div>
                        )}
                        {hoveredItem === 'บัตรแรบบิท' && (
                            <div className="navmenu-subitem-detail-wrap" style={{ display: 'block', left: '1008.734px' }}>
                                <ul className="navmenu-subitem-detail">
                                    <li><a>ข้อมูลการซื้อบัตรโดยสาร/การเติมเที่ยว</a></li>
                                    <li><a>วิธีใช้บัตรผ่านประตูอัตโนมัติ</a></li>
                                </ul>
                            </div>
                        )}
                        {hoveredItem === 'บัตร EMV Contactless' && (
                            <div className="navmenu-subitem-detail-wrap" style={{ display: 'block', left: '1008.734px' }}>
                                <ul className="navmenu-subitem-detail">
                                    <li><a>การใช้บัตร EMV</a></li>
                                    <li><a>ประกาศเงื่อนไขการใช้ EMV</a></li>
                                </ul>
                            </div>
                        )}
                        {hoveredItem === 'เงื่อนไขการออกบัตร' && (
                            <div className="navmenu-subitem-detail-wrap" style={{ display: 'block', left: '1008.734px' }}>
                                <ul className="navmenu-subitem-detail">
                                    <li><a>ประกาศเงื่อนไขการออกตั๋วโดยสาร</a></li>
                                    <li><a>ประกาศเงื่อนไขการใช้สิทธิ์สวัสดิการแห่งรัฐ</a></li>
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </nav>
        </header >
    );
};

export default Nav;
