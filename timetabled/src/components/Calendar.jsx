import Event from './Event'

const Calendar = () => {
  
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 A.M.</td>
                        <Event event='Fancy Dinner 🎩' color ='green' location='Maple & Ash'/>
                        <Event event='Coffee ☕' color ='blue' location='Starbucks'/>
                        <Event event='Smoothie 🥤' color ='pink' location='Juice Bar'/>
                        <Event event='Pastry 🥐' color ='green' location='Bakery'/>
                        <Event event='Juice 🧃' color ='blue' location='Smoothie Shop'/>
                        <td></td>
                        <Event event='Yolk 🍳' color ='green' location='Eggcellent'/>
                    </tr>
                    <tr>
                        <td className="time">9 A.M.</td>
                        <Event event='Yoga 🧘' color ='blue' location='Yoga Studio'/>
                        <Event event='Gym 💪' color ='green' location='Fitness Center'/>
                        <Event event='Walk 🚶' color ='pink' location='Park'/>
                        <Event event='Subway 🚊' color ='pink' location='Subway Station'/>
                        <td></td>
                        <Event event='Run 🏃' color ='green' location='Running Track'/>
                        <Event event='The Bean 🫘' color ='blue' location='Coffee Shop'/>
                    </tr>
                    <tr>
                        <td className="time">10 A.M.</td>
                        <Event event='Work 💼' color ='blue' location='Office'/>
                        <Event event='Meeting 📞' color ='pink' location='Conference Room'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 A.M.</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 P.M.</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Walk 🚶' color ='pink' location='Park'/>
                        <Event event='Subway 🚊' color ='pink' location='Subway Station'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 P.M.</td>
                        <td></td>
                        <Event event='Walk 🚶' color ='pink' location='Park'/>
                        <Event event='Subway 🚊' color ='pink' location='Subway Station'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 P.M.</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 P.M.</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Walk 🚶' color ='pink' location='Park'/>
                        <Event event='Subway 🚊' color ='pink' location='Subway Station'/>
                    </tr>
                     <tr>
                        <td className="time">4 P.M.</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                     <tr>
                        <td className="time">5 P.M.</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Walk 🚶' color ='pink' location='Park'/>
                        <Event event='Subway 🚊' color ='pink' location='Subway Station'/>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;