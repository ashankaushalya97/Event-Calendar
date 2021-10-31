/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AgendaScreen from './screens/agenda';
import Calendar from './screens/calendars';
import CalendarList from './screens/calendarsList';
import ExpCalendar from './screens/expandableCalendar';
import HorzontalCal from './screens/horizontalCalendarList';
import TimelineCal from './screens/timelineCalendar';


const App: () => React$Node = () => {
	const [isSigned, setIsSigned] = useState<boolean>(false);
    const token = useSelector(authTokenSelector);
    const history = useHistory();

    useEffect(() => {
        try {
            const notExpired = checkTokenExpiry(token);
            setIsSigned(notExpired);
            
            if(!notExpired) {
                store.dispatch(authLogoutWithMiddlewareMount());
                store.dispatch(addAlertWithTimeout({
                        id: generateUUID(),
                        severity: "error" as AlertSeverity,
                        type: AlertType.SNACKBAR,
                        message: "Session expired!",
                    }
                ))
                history.push(routes.LOGIN);
            }
        }
        catch(e) {
            history.push(routes.LOGIN);
        }
       
    }, [token, history]);

  return (
    <>
     <AgendaScreen/>
    {/* <Calendar/> */}
    {/* <CalendarList/> */}
    {/* <ExpCalendar/>  */}
    {/* <HorzontalCal/> */}
    {/* <TimelineCal/> */}
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
