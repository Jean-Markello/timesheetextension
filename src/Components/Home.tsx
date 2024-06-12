import { UserOutlined } from "@ant-design/icons";
import { Avatar, Flex, Segmented, Input, Card, Button } from "antd";

function Home() {
  return (
    <Flex gap="small" align="flex-start" vertical>
      <Segmented
        options={[
          {
            label: (
              <div style={{ padding: 4 }}>
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                <div>Connections</div>
              </div>
            ),
            value: "user1",
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                <div>Add field</div>
              </div>
            ),
            value: "user2",
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
                <div>Diplay Field</div>
              </div>
            ),
            value: "user3",
          },
        ]}
      />
      <Card title="Card title" bordered={false}>
        <label> Field name </label>
        <Input placeholder="title" />
        <label> Field </label>
        <Input placeholder="A1" />
        <Button style={{marginTop: 10, width:105}} type="primary" shape="round">SAVE</Button>
      </Card>
    </Flex>
  );
}

export default Home;
