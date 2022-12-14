import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Header as AntdHeader } from 'antd/lib/layout/layout';
import { Avatar, Badge, List } from 'antd';
import { Icon, Popover } from '../../components';
import cn from 'classnames';


function Header() {
  const [visiblePopover, setVisiblePopover] = useState(false);
  // const errorCount = outputStore.errorData.filter(({ resolved }) => !resolved);

  // const renderContent = () => {
  //   return (
  //     <div className={styles.popupContent}>
  //       <div className={styles.listWrap}>
  //         <List
  //           itemLayout="horizontal"
  //           header={<div className={styles.title}>Помилки:</div>}
  //           dataSource={outputStore.errorData}
  //           locale={{
  //             emptyText: (
  //               <div className={styles.emptyTextWrap}>
  //                 <Icon type="NotificationOutlined" className={styles.emptyIcon} />
  //                 <div>Немає помилок</div>
  //               </div>
  //             ),
  //           }}
  //           renderItem={(item) => (
  //             <List.Item
  //               className={cn(styles.listItem, item.resolved && styles.opacity)}
  //               onClick={() => outputStore.setResolvedErrors(item.id)}
  //             >
  //               <List.Item.Meta
  //                 avatar={<Avatar src={`${process.env.PUBLIC_URL}/book.png`} />}
  //                 title={<span>{item.title}</span>}
  //                 description="Error test description"
  //               />
  //             </List.Item>
  //           )}
  //         />
  //         {outputStore.errorData.length > 0 && (
  //           <div className={styles.footer}>
  //             <div onClick={() => outputStore.setResolvedErrors(undefined, true)}>Очистити всі</div>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div className={styles.root}>
      <AntdHeader className={styles.header}>
        <div className={styles.content}>
          <Popover  visible={visiblePopover} onChange={setVisiblePopover}>
            <div className={cn(styles.badgeWrap, visiblePopover && styles.active)}>
              <Badge  className={styles.badge} offset={[5, -7]}>
                <Icon type="BellOutlined" />
              </Badge>
            </div>
          </Popover>
        </div>
      </AntdHeader>
    </div>
  );
}

export default Header;
