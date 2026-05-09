import React, {
  useState,
  useEffect,
} from "react";

function Profile() {

  const [profile, setProfile] = useState({

    name: "Teja818",

    email: "teja@gmail.com",

    bio: "Cybersecurity Enthusiast 🚀",

    followers: 1200,

    following: 0,

    image:
      "https://randomuser.me/api/portraits/men/32.jpg",

  });

  const [editMode, setEditMode] =
    useState(false);

  const [followingUsers, setFollowingUsers] =
    useState([]);

  // REAL-TIME FOLLOWING UPDATE

  useEffect(() => {

    const loadFollowingUsers = () => {

      const savedFriends =
        JSON.parse(
          localStorage.getItem("friends")
        ) || [];

      const onlyFollowing =
        savedFriends.filter(
          (friend) => friend.following
        );

      setFollowingUsers(onlyFollowing);

      setProfile((prev) => ({

        ...prev,

        following: onlyFollowing.length,

      }));

    };

    // INITIAL LOAD

    loadFollowingUsers();

    // AUTO REFRESH

    const interval =
      setInterval(loadFollowingUsers, 1000);

    return () =>
      clearInterval(interval);

  }, []);

  // UNFOLLOW

  const handleUnfollow = (id) => {

    const updatedUsers =
      followingUsers.filter(
        (user) => user.id !== id
      );

    setFollowingUsers(updatedUsers);

    setProfile({

      ...profile,

      following: updatedUsers.length,

    });

    // UPDATE LOCAL STORAGE

    const savedFriends =
      JSON.parse(
        localStorage.getItem("friends")
      ) || [];

    const updatedFriends =
      savedFriends.map((friend) => {

        if (friend.id === id) {

          return {

            ...friend,

            following: false,

            followers:
              friend.followers - 1,

          };

        }

        return friend;

      });

    localStorage.setItem(
      "friends",
      JSON.stringify(updatedFriends)
    );

  };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">

        {/* PROFILE CARD */}

        <div className="bg-slate-900 p-10 rounded-3xl text-center">

          <img
            src={profile.image}
            alt="profile"
            className="w-40 h-40 rounded-full mx-auto mb-6"
          />

          {editMode ? (

            <div className="space-y-5">

              <input
                type="text"
                value={profile.name}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    name: e.target.value,
                  })
                }
                className="w-full bg-slate-800 p-4 rounded-2xl outline-none"
              />

              <input
                type="email"
                value={profile.email}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    email: e.target.value,
                  })
                }
                className="w-full bg-slate-800 p-4 rounded-2xl outline-none"
              />

              <textarea
                value={profile.bio}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    bio: e.target.value,
                  })
                }
                className="w-full bg-slate-800 p-4 rounded-2xl outline-none"
                rows="4"
              />

            </div>

          ) : (

            <>

              <h1 className="text-5xl font-bold mb-4">

                {profile.name}

              </h1>

              <p className="text-xl text-gray-400 mb-2">

                {profile.email}

              </p>

              <p className="text-2xl text-gray-300 mb-8">

                {profile.bio}

              </p>

            </>

          )}

          {/* FOLLOW COUNTS */}

          <div className="flex justify-center gap-10 mb-8">

            <div>

              <h1 className="text-4xl font-bold">

                {profile.followers}

              </h1>

              <p className="text-gray-400">

                Followers

              </p>

            </div>

            <div>

              <h1 className="text-4xl font-bold">

                {profile.following}

              </h1>

              <p className="text-gray-400">

                Following

              </p>

            </div>

          </div>

          {/* EDIT BUTTON */}

          <button
            onClick={() =>
              setEditMode(!editMode)
            }
            className="bg-cyan-500 text-black px-10 py-4 rounded-2xl text-xl font-bold hover:bg-cyan-400 transition"
          >

            {editMode
              ? "Save Profile"
              : "Edit Profile"}

          </button>

        </div>

        {/* FOLLOWING USERS */}

        <div className="lg:col-span-2 bg-slate-900 p-10 rounded-3xl">

          <h1 className="text-4xl font-bold mb-10">

            Following Users 👥

          </h1>

          {followingUsers.length === 0 ? (

            <div className="text-center text-2xl text-gray-400">

              No Following Users

            </div>

          ) : (

            <div className="space-y-6">

              {followingUsers.map((user) => (

                <div
                  key={user.id}
                  className="bg-slate-800 p-5 rounded-2xl flex justify-between items-center"
                >

                  <div className="flex items-center gap-5">

                    <img
                      src={user.image}
                      alt="user"
                      className="w-20 h-20 rounded-full"
                    />

                    <div>

                      <h1 className="text-3xl font-bold">

                        {user.name}

                      </h1>

                      <p className="text-gray-400">

                        Following

                      </p>

                    </div>

                  </div>

                  {/* UNFOLLOW BUTTON */}

                  <button
                    onClick={() =>
                      handleUnfollow(user.id)
                    }
                    className="bg-red-500 px-6 py-3 rounded-2xl font-bold hover:bg-red-400 transition"
                  >

                    Unfollow

                  </button>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>

  );
}

export default Profile;