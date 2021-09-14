import React, { useState, useEffect, useContext } from "react";
import ProfileContainer from "./profile";
import { FirebaseContext } from "../context/firebase";
import Loading from "../components/loading/index";
import Header from "../components/header/index";

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src="joker1">
        <Header.Feature>
          <Header.Text>
            In Gotham City, mentally troubled comedian Arthur Fleck is
            disregarded and mistreated by society. He then embarks on a downward
            spiral of revolution and bloody crime. This path brings him
            face-to-face with his alter-ego: the Joker.
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <ProfileContainer user={user} setProfile={setProfile} />
  );
}
