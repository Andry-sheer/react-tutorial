
const Profile = ({ user }) => (
  <p style={{background:'silver', padding:'25px', border:'solid green 2px'}}>
    <img src={user?.avatar} alt="avatar" />
    <span>{user?.first_name} {user?.last_name}</span>
  </p>
)

export default Profile;