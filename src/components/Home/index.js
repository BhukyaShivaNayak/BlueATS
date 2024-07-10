import Header from '../Header'
import './index.css'

const Home = () => {
  const tableData = [
    {
      id: 1,
      submitedBy: 'John Doe',
      submissionType: 'New Application',
      applicantFullName: 'Alice Smith',
      submitedOn: '2024-07-10',
      jobCode: 'ABC123',
      vendorName: 'Tech Solutions Inc.',
      count: 1,
      applicantEmailAddress: 'alice.smith@example.com',
    },
    {
      id: 2,
      submitedBy: 'Jane Doe',
      submissionType: 'Update',
      applicantFullName: 'Bob Johnson',
      submitedOn: '2024-07-09',
      jobCode: 'DEF456',
      vendorName: 'Services Co.',
      count: 2,
      applicantEmailAddress: 'bob.johnson@example.com',
    },
    {
      id: 3,
      submitedBy: 'Eve Adams',
      submissionType: 'New Application',
      applicantFullName: 'Charlie Brown',
      submitedOn: '2024-07-08',
      jobCode: 'GHI789',
      vendorName: 'Innovative Solutions Ltd.',
      count: 1,
      applicantEmailAddress: 'charlie.brown@example.com',
    },
    {
      id: 4,
      submitedBy: 'Grace Lee',
      submissionType: 'Update',
      applicantFullName: 'David White',
      submitedOn: '2024-07-07',
      jobCode: 'JKL012',
      vendorName: 'Digital Services Group',
      count: 3,
      applicantEmailAddress: 'david.white@example.com',
    },
    {
      id: 5,
      submitedBy: 'Frank Miller',
      submissionType: 'New Application',
      applicantFullName: 'Emma Davis',
      submitedOn: '2024-07-06',
      jobCode: 'MNO345',
      vendorName: 'Tech Innovations Ltd.',
      count: 1,
      applicantEmailAddress: 'emma.davis@example.com',
    },
    {
      id: 6,
      submitedBy: 'Hannah Brown',
      submissionType: 'Update',
      applicantFullName: 'Frank Wilson',
      submitedOn: '2024-07-05',
      jobCode: 'PQR678',
      vendorName: 'Global Services Inc.',
      count: 2,
      applicantEmailAddress: 'frank.wilson@example.com',
    },
    {
      id: 7,
      submitedBy: 'Isaac Clark',
      submissionType: 'New Application',
      applicantFullName: 'Grace Robinson',
      submitedOn: '2024-07-04',
      jobCode: 'STU901',
      vendorName: 'Innovate Tech Solutions',
      count: 1,
      applicantEmailAddress: 'grace.robinson@example.com',
    },
    {
      id: 8,
      submitedBy: 'Jack Taylor',
      submissionType: 'Update',
      applicantFullName: 'Helen Moore',
      submitedOn: '2024-07-03',
      jobCode: 'VWX234',
      vendorName: 'Tech Solutions Co.',
      count: 3,
      applicantEmailAddress: 'helen.moore@example.com',
    },
    {
      id: 9,
      submitedBy: 'Kevin Brown',
      submissionType: 'New Application',
      applicantFullName: 'Ivy Green',
      submitedOn: '2024-07-02',
      jobCode: 'YZA567',
      vendorName: 'Global Innovations Group',
      count: 1,
      applicantEmailAddress: 'ivy.green@example.com',
    },
    {
      id: 10,
      submitedBy: 'Linda Davis',
      submissionType: 'Update',
      applicantFullName: 'John Anderson',
      submitedOn: '2024-07-01',
      jobCode: 'BCD890',
      vendorName: 'Digital Solutions Inc.',
      count: 2,
      applicantEmailAddress: 'john.anderson@example.com',
    },
  ]

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="dash-info">
          <img
            src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1719410317/R_o28n6d.png"
            alt=""
            className="dashboard-icon"
          />
          <div className="dashboard-title">
            <h1 className="d1">DASHBOARD</h1>
            <h1 className="d2">Bench Sales Dashboard</h1>
          </div>
        </div>

        <div className="create-section">
          <img
            src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1719412234/Untitled-removebg-preview_pv0lsa.png"
            className="star-icon"
            alt="star-icon"
          />
          <p className="m">Create Job Posting</p>
          <p className="m">Create an Applicant</p>
        </div>

        <div className="card">
          <div className="card-title">
            <h1>Talent bench Page in Progress</h1>
            <input type="date" />
          </div>{' '}
        </div>
      </div>
    </>
  )
}
export default Home
