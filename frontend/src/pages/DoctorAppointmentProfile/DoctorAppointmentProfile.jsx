import "react-datepicker/dist/react-datepicker.css";
import DocHeader from 'components/DocHeader/DocHeader'
import DocSidebar from 'components/DocSidebar/DocSidebar'
import DocMain from 'components/DocMain/DocMain'




import { Chart, ArcElement, CategoryScale, Title, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, CategoryScale, Title, Tooltip, Legend);

const DoctorProfile = () => {
  

  return (
    <>
      <DocHeader />
      <DocSidebar />
      <DocMain />
      
    </>
  );
};

export default DoctorProfile;