import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useEffect, useState } from 'react';
import newsApi from '../util/newsApi';
import ExpandableListVertical from './ExpandableListVertical';
import CustomDrawerItem from './CustomDrawerItem';

function CustomDrawerContent(props) {
    const [categories, setCategories] = useState();

    useEffect(() => {
        newsApi.getCategories().then((data) => setCategories(data));
    }, []);

    const navigation = props.navigation;

    let content = null;
    if(categories) {
        content = (
            <DrawerContentScrollView showsVerticalScrollIndicator={false}>
                {/* <DrawerItemList {...props}/> */}
                <CustomDrawerItem label="ANASAYFA" navigation={navigation} screenName="StackNavigator"/>
                <CustomDrawerItem label="FOTO GALERİ" navigation={navigation} screenName="PhotoGalleryStackNavigator"/>
                <CustomDrawerItem label="VİDEO GALERİ" navigation={navigation} screenName="VideoGalleryStackNavigator"/>
                <CustomDrawerItem label="YAZARLARIMIZ" navigation={navigation} screenName="AuthorsStackNavigator"/>
                <ExpandableListVertical mainLabel="KATEGORİLER" data={categories}/>
            </DrawerContentScrollView>
        );
    }
    return content;
}

export default CustomDrawerContent;