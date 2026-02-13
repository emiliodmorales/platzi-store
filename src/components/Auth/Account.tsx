import { useAuth } from "./AuthContext";

export default function Account() {
  const { getProfile } = useAuth();
  const profile = getProfile();

  return (
    <>
      <img alt={profile.name} src={profile.avatar} />
      <h4>Name</h4>
      <p>{profile.name}</p>
      <h4>Email</h4>
      <p>{profile.email}</p>
    </>
  );
}
