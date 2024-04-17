const targetFn = require("./controller");

describe("the print function", () => {
  // Standard best practice.
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should respond with 'Hello I'am Heng Khai!'", () => {
    const mockReq = {};
    const mockRes = {
      send: jest.fn(),
    };

    targetFn(mockReq, mockRes);
    expect(mockRes.send).toHaveBeenCalledWith("Hello I'am Heng Khai!"); // If you change this value, the test will fail.
  });
});
