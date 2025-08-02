export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('bookings');
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
        
        <TabNavigation 
          tabs={[
            { id: 'bookings', label: 'Bookings' },
            { id: 'favorites', label: 'Favorites' },
            { id: 'messages', label: 'Messages' }
          ]}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
        
        <div className="mt-6">
          {activeTab === 'bookings' && (
            <BookingList bookings={userBookings} />
          )}
          {activeTab === 'favorites' && (
            <FavoriteItems favorites={userFavorites} />
          )}
          {activeTab === 'messages' && (
            <MessageList messages={userMessages} />
          )}
        </div>
      </div>
    </Layout>
  );
}