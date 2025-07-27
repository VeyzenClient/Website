import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

export default function License() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  
  return (
    <section className="min-h-screen w-full py-24 px-6 sm:px-12 lg:px-24 max-w-4xl mx-auto">
      <div data-aos="fade-up" className="space-y-8">
        <h1 className="text-4xl font-bold mb-6 text-center gradient-text">Our <span className="gradient-text">License</span></h1>

        <p className="text-muted-foreground leading-relaxed">
          VeyzenClient is <strong>open source software</strong> licensed under the
          <a
            href="https://opensource.org/licenses/MIT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline mx-1"
          >
            MIT License
          </a>.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          This means you are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, provided that the original copyright notice and this permission notice are included in all copies or substantial portions of the Software.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Disclaimer</h2>
        <p className="text-muted-foreground leading-relaxed">
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
      </div>
    </section>
  );
}