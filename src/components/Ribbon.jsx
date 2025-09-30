import React, { useState } from 'react';
import '../App.css'; // CSSファイルをインポート
import { Box, Button, Drawer, List, ListItem, ListItemButton,
    ListItemText, ListItemIcon, Typography } from '@mui/material'; // MUIコンポーネントをインポート
import PersonIcon from '@mui/icons-material/Person';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Link } from 'react-router-dom';

const menu = [
    { title: 'ポートフォリオ', href: 'WorkPortforio', icon: PersonIcon },
    { title: '韓国ドラマブログ', href: 'WorkKoreaBlog', icon: ImportContactsIcon },
];

export const Ribbon = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDrawerToggle = () => {
        setShowDrawer(!showDrawer);
    };

    return (
        <div className="ribbon">
          <div className="overlay-ribbon">
            <ul className="ribbon-menu">
                <li className="ribbon-item">
                    <Button onClick={handleDrawerToggle}>
                      <DensityMediumIcon sx={{ color: 'black' }} />
                    </Button>
                </li>
                <li className="ribbon-item"><a href="#top">TOP</a></li>
                <li className="ribbon-item"><a href="#about">このサイトについて</a></li>
                <li className="ribbon-item" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <a href="#portfolio">ポートフォリオ</a>
                    {isDropdownOpen && (
                        <ul className="dropdown">
                            <li><a href="#portfolio">自己紹介</a></li>
                            <li><a href="#works">製作物</a></li>
                            <li><a href="#skills">スキル</a></li>
                        </ul>
                    )}
                </li>
                <li className="ribbon-item"><a href="#contact">連絡先</a></li>
            </ul>
          </div>
          <Drawer anchor="left" open={showDrawer} onClose={handleDrawerToggle}>
            <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
              <Typography variant="h6" sx={{ padding: 2 }}>
               製作物一覧
              </Typography>
              <List>
                {menu.map((obj) => {
                  const Icon = obj.icon;
                  return (
                    <ListItem key={obj.title} disablePadding>
                      <ListItemButton component={Link} to={obj.href}>
                        <ListItemIcon><Icon /></ListItemIcon>
                        <ListItemText primary={obj.title} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Drawer>
        </div>
    );
};

export default Ribbon;
