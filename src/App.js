import "./App.css";
import { Button, Form, Input, Select, Space } from "antd";
import {
  ClearOutlined,
  LeftOutlined,
  PlusCircleOutlined,
  PlusOutlined,

  MinusCircleOutlined,
} from "@ant-design/icons";

function App() {
  const onFinish = (values) => {
    console.log({ values });
  };

  const initialValues = {
    teacher: "Aamir",
    students: [
      {}, 
      {
        first: "David"
      }
    ]
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
      className="App"
    >
      <Form initialValues={initialValues}
        onFinish={onFinish}
        style={{ with: 700 }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item name="teacher" label="Teacher Name">
          <Input className="input-field" placeholder="Teacher Name" />
        </Form.Item>
        <Form.Item name="class" label="Class Name">
          <Input className="input-field" placeholder="Class Name" />
        </Form.Item>
        <Form.List name="students">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Space key={field.key} direction="horizontal" size={12}>
                  <Form.Item
                  key={field.key}
                  name={[field.name, "first"]}
                  label={`${index + 1}-Student`}
                  rules={[ 
                    {required: true, message: "First name required"}
                  ]}
                >
                    <Input className="input-field" placeholder="First name" />
                  </Form.Item>
                  <Form.Item name={[field.name, "first"]}>
                    <Input className="input-field" placeholder="last name" />
                  </Form.Item>
                  <Form.Item name={[field.name, "gender"]}>
                    <Select placeholder="Gender">
                      {["Male", "Female"].map((gender) => {
                        return (
                          <Select.Option value={gender} key={gender}>
                            {" "}
                            {gender}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                  <MinusCircleOutlined style={{height: 40, color: "red"}} onClick={()=>{
                    remove(field.name)
                  }}/>
                </Space>
              ))}
              <Form.Item>
                <Button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "50px",
                  }}
                  icon={<PlusOutlined />}
                  type="dashed"
                  block
                  onClick={() => add()}
                >
                  add a student
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
