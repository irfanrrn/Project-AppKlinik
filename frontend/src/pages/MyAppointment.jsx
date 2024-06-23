import MyAppointmentComponent from "../components/MyAppointmentComponent";
import UserLayout from '../components/UserLayout';

function MyAppointment() {
  return (
    <div>
      <UserLayout>
        <MyAppointmentComponent />
      </UserLayout>
    </div>
  );
}

export default MyAppointment;