import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, DrawerLayoutAndroid, TouchableOpacity, ScrollView } from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import { event } from 'react-native-reanimated';
import calendarList from '../calendar_list.json';

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

const Calendar = ({ navigation }) => {

    const [course, setCourse] = useState('');
    const [items, setItems] = useState({});

    const loadItems = (day) => {
        setTimeout(() => {
        for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
            if (!items[strTime]) {
            items[strTime] = [];
            const numItems = calendarList.length;
            if(course === ''){
            for (let j = 0; j < numItems; j++) {
                items[strTime].push({
                name: 'Event on ' + strTime + ' #' + j,
                height: Math.max(50, Math.floor(Math.random() * 150)),
                });
            }
            }
            else{
                calendarList.map(calendarname => {
                  if(calendarname.CalendarName === course){
                      calendarname.event.map((event) => {
                        items[strTime].push({
                          name: 'Event on ' + event.date,
                          height: Math.max(50, Math.floor(Math.random() * 150)),
                          });
                      })
                  }
                })
            }
            }
        }
        const newItems = {};
        Object.keys(items).forEach((key) => {
            newItems[key] = items[key];
        });
        setItems(newItems);
        }, 1000);
    };

    const renderItem = (item) => {
        return (
          <TouchableOpacity style={{marginRight: 10, marginTop: 17}} onPress = {() => alert(item.name)}>
            <Card>
              <Card.Content>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text>{item.name}</Text>
                  <Avatar.Text label="Cis" />
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        );
      };
    
      return (
        <View style={{flex: 1}}>
          <View style={styles.courseName}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
              {calendarList.map((event, index) =>(
                <TouchableOpacity key={index} style={styles.course} onPress={() => setCourse(event.CalendarName)}>
                    <Text >{event.CalendarName}</Text>
                </TouchableOpacity>
              ))}
          </ScrollView>
          </View>
          <Agenda
            items={items}
            loadItemsForMonth={loadItems}
            renderItem={renderItem}
          />
        </View>
      );
    
};

const styles = StyleSheet.create({
  courseName: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10
  },
  course: {
    marginRight: 10,
    padding: 10,
    backgroundColor: '#E3E3E3',
    borderRadius: 30
  }
})

export default Calendar;